import {Video} from './video';
import {Emotion} from './emotion';

export class App {

  constructor(config={}) {

    this.config = config;

    this.emotions = [];
    this.currentEmotion = '';

    this.averageEmotion = new Array(100);

    this.video = new Video()
    this.ec = new Emotion();
    this.ctracker = new clm.tracker();

    // update stats on every iteration
    document.addEventListener('clmtrackrIteration', function(event) {
    }, false);

  }

  init() {

    this.ec.init(emotionModel);
    var emotionData = this.ec.getBlank();

    this.ctracker.init(pModel);
    this.ctracker.start(this.video.videoElement);

    this.video.start();

    setInterval(function() {
      this.currentEmotion = this.calcCurrentEmotion(this.averageEmotion);
    }.bind(this), 1000);

  }

  startDrawLoop() {

    requestAnimationFrame(function() {
      this.startDrawLoop();
    }.bind(this));

    this.video.overlayCC.clearRect(0, 0, 400, 300);
    //psrElement.innerHTML = "score :" + ctrack.getScore().toFixed(4);
    if (this.ctracker.getCurrentPosition()) {
      this.ctracker.draw(overlay);
    }
    var cp = this.ctracker.getCurrentParameters();

    var er = this.ec.meanPredict(cp);

    if (er) {

      this.emotions = er;
      // this.currentEmotion = this.checkCurrentEmotion(er);

      this.averageEmotion.push(this.checkCurrentEmotion(er));
      this.averageEmotion.shift();

      document.getElementById('emotions').innerHTML = this.currentEmotion;

    }


  }

  calcCurrentEmotion(emotionArr) {

    var emotionObject = emotionArr.reduce(function(init, arr, index) {
      if (init[arr]) {
        init[arr]++
      } else {
        init[arr] = 1;
      }
      return init
    }, {});

    return Object.keys(emotionObject).sort(function(a, b) {
      return a - b
    })[0];

  }

  checkCurrentEmotion(er) {

    er.sort(function(a, b) {
      return b.value - a.value;
    });

    return er[0].emotion;

  }

}
