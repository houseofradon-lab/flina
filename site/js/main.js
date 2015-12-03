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
    		happy: '&#x1f471;',
  			sad: ':(',
  			angry: '>:(',
  			surprised: ':O'
    	}

    	app.landingPage.selectedDomElement.innerText += ' ' + emoji[e.detail.emotion] + ' ';

    	var node = app.landingPage.selectedDomElement;
		node.focus();
		var textNode = node.firstChild;
		var caret = node.innerText.length;
		var range = document.createRange();
		range.setStart(textNode, caret);
		range.setEnd(textNode, caret);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);

    }

  });

}