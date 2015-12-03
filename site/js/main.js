import {App} from './app';

window.onload = function() {

  window.app = new App();

  window.addEventListener('start', function() {
    window.app.init();
  	window.app.startDrawLoop();
  });

  window.addEventListener('emotionChange', function(e) {
    console.log(e.detail);
  });

}