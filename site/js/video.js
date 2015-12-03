export class Video {

  constructor(videoId='video', overlayId='overlay') {

    // this.videoElement = document.getElementById(videoId);
    // this.overlay = document.getElementById(overlayId);

    this.videoElement = document.createElement('video');
    this.videoElement.setAttribute('width', '400px');
    this.videoElement.setAttribute('height', '300px');
    this.videoElement.style.display = 'none';

    this.overlay = document.createElement('canvas');
    this.overlay.setAttribute('width', '400px');
    this.overlay.setAttribute('height', '300px');
    this.overlay.style.display = 'none';

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.videoElement);
    body.appendChild(this.overlay);

		this.overlayCC = this.overlay.getContext('2d');

  }

  start() {

    navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
          navigator.msGetUserMedia;

    window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;
    if (navigator.getUserMedia) {

      var videoSelector = {video : true};
      if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
        var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
        if (chromeVersion < 20) {
          videoSelector = 'video';
        }
      };

      navigator.getUserMedia(videoSelector, function( stream ) {
        if (this.videoElement.mozCaptureStream) {
          this.videoElement.mozSrcObject = stream;
        } else {
          this.videoElement.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
        }
        this.videoElement.play();
      }.bind(this), function() {
        alert('Something went bad');
      });
    } else {
      alert('Browser does not support getUserMedia.');
    }
  }
}
