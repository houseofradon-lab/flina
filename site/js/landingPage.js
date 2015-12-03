export class LandingPage {

  constructor() {

    this.dom = document.getElementById('landing-page');

    this.selectedDomElement = null;

  }

  init() {

    document.getElementById('launch-button').addEventListener('click', function() {

      var evt = new CustomEvent('start');
      window.dispatchEvent(evt);

      document.getElementById('textbox').setAttribute('contenteditable', true);

    });

    document.getElementById('textbox').addEventListener('focus', function(e) {
      e.target.innerHTML = '';

      this.selectedDomElement = e.target;

    }.bind(this));

  }

}
