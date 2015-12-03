export class Overlay {

  constructor(domeNode='overlay', src) {

    this.dom = document.getElementById(domNode);
    this.videoElement = document.createElement('video');
    this.setupVideo(src);
  }

  setupVideo(src) {
    this.dom.appendChild(this.videoElement);
    this.videoElemen.src = src;
    this.videoElement.autoplay = true;
    this.videoElement.onended = function() {
      this.toggleDom();
    }
  }

  toggleDom() {
    this.dom.style.display = 'none';
  }

}
