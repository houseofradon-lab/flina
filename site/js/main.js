import {App} from './app';

window.onload = function() {

  window.app = new App();

  window.addEventListener('start', function() {
    window.app.init();
  	window.app.startDrawLoop();
  });

  window.addEventListener('emotionChange', function(e) {
    console.log(e.detail);
    if (app.landingPage.selectedDomElement) {

    	var emoji = {
    		happy: ' 😀 ',
  			sad: ' 😢 ',
  			angry: ' 😡 ',
  			surprised: ' 😱 '
    	}

    	app.landingPage.selectedDomElement.value += emoji[e.detail.emotion];

  		// var node = app.landingPage.selectedDomElement;
		// node.focus();
		// var textNode = node.firstChild;
		// var caret = node.innerHTML.length;
		// var range = document.createRange();
		// console.log(range);
		// range.setStart(textNode, caret);
		// range.setEnd(textNode, caret);
		// var sel = window.getSelection();
		// sel.removeAllRanges();
		// sel.addRange(range);

    }

  });

}