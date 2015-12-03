import {Emotion} from './emotion';
import {App} from './app';

window.onload = function() {

  var app = new App();

  var ec = new Emotion();
  ec.init(emotionModel);
  var emotionData = ec.getBlank();

  var ctracker = new clm.tracker();
  ctracker.init(pModel);
  console.log(app)
  console.log(app.videoElement)
  ctracker.start(app.videoElement);
  drawLoop();

  function drawLoop() {
   requestAnimationFrame(drawLoop);
    app.overlayCC.clearRect(0, 0, 400, 300);
    //psrElement.innerHTML = "score :" + ctrack.getScore().toFixed(4);
    if (ctracker.getCurrentPosition()) {
      ctracker.draw(overlay);
    }
    var cp = ctracker.getCurrentParameters();

    var er = ec.meanPredict(cp);
  }

  // update stats on every iteration
  document.addEventListener('clmtrackrIteration', function(event) {
  }, false);

}