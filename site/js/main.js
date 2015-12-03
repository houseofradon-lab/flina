import {App} from './app';

window.onload = function() {

  window.app = new App();
  window.app.init();
  window.app.startDrawLoop();

  window.addEventListener('emotionChange', function(e) {
    console.log(e.detail);
  })

}