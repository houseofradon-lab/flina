export class LandingPage {

  constructor() {

    this.dom = document.getElementById('landing-page');

  }

  init() {

    document.getElementById('launch-button').addEventListener('click', function() {

      var evt = new CustomEvent('start');
      window.dispatchEvent(evt);

    });

    document.getElementById('textbox').addEventListener('focus', function() {
      this.innerHTML = '';
    });

  }

}
