export class Logo {

  constructor(logoNode='logo', textNode='logo-text') {
    this.logo = document.getElementById(logoNode);
    this.logoText = document.getElementById(textNode);
  }

  // 29 frames
  run(frames=0, text=[], speed=300) {
    var currentIndex = 0;
    var height = this.logo.clientHeight;
    var forward = true;
    this.interval = setInterval(function() {
      console.log(currentIndex)
      currentIndex = (forward) ? currentIndex + 1 : currentIndex - 1;
      this.setImageAndText(currentIndex, height, text, this.logo, this.logoText);
      if (currentIndex === frames) forward = false;
      if (currentIndex === 0) forward = true;
    }.bind(this), 50);
  }

  setImageAndText(index, size, s, logo, text) {
    console.log(index * size)
    console.log(index)
    logo.style.backgroundPositionY = index * size + 'px';
  }

  show() {

    this.dom.style.display = 'block';

  }

}
