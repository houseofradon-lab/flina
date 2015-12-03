import {Video} from './video';
import {Emotion} from './emotion';
import {EC} from './emotionCalculation';
import {LandingPage} from './landingPage';

export class App {

  constructor(config={}) {

    this.config = config;

    this.emotions = [];
    this.currentEmotion = '';

    this.averageEmotion = new Array(100);

    this.video = new Video()

    this.ec = new Emotion();
    this.ctracker = new clm.tracker();

    this.landingPage = new LandingPage();
    this.landingPage.show();

  }

  init() {

    this.ec.init(emotionModel);
    var emotionData = this.ec.getBlank();

    this.ctracker.init(pModel);
    this.ctracker.start(this.video.videoElement);

    this.video.start();

    setInterval(function() {
      var currentEmotion = EC.calcCurrentEmotion(this.averageEmotion);

      if (currentEmotion.emotion !== this.currentEmotion.emotion) {
        // dispatch event
        var evt = new CustomEvent('emotionChange', {detail: currentEmotion});
        window.dispatchEvent(evt);
      }

      this.currentEmotion = currentEmotion
    }.bind(this), 1000);

  }

  startDrawLoop() {

    requestAnimationFrame(function() {
      this.startDrawLoop();
    }.bind(this));

    this.video.overlayCC.clearRect(0, 0, 400, 300);
    if (this.ctracker.getCurrentPosition()) {
      this.ctracker.draw(this.video.overlay);
    }

    var cp = this.ctracker.getCurrentParameters();
    var er = this.ec.meanPredict(cp);

    if (er) {

      this.emotions = er;

      this.averageEmotion.push(EC.checkCurrentEmotion(er));
      this.averageEmotion.shift();

    }

  }

}
