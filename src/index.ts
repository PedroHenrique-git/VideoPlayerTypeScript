/* eslint-disable no-useless-constructor */
class VideoPlayer {
  constructor(
    private video: HTMLVideoElement,
    private buttonPlay: HTMLButtonElement,
    private buttonPause: HTMLButtonElement,
    private buttonMute?: HTMLButtonElement,
    private buttonVol1?: HTMLButtonElement,
    private buttonVol2?: HTMLButtonElement,
    private buttonFullScreen?: HTMLButtonElement,
  ) {}

  init(): void {
    this.playVideo();
    this.pauseVideo();
    this.muteVideo();
  }

  playVideo(): void {
    this.buttonPlay.addEventListener("click", () => {
      this.video.play();
    });
  }

  pauseVideo(): void {
    this.buttonPause.addEventListener("click", () => {
      this.video.pause();
    });
  }

  muteVideo(): void {
    if (this.buttonMute) {
      this.buttonMute.addEventListener("click", () => {
        this.video.muted = !this.video.muted;
      });
    }
  }
}
const video = document.querySelector("video") as HTMLVideoElement;
const buttonPlay = document.querySelector(".play") as HTMLButtonElement;
const buttonStop = document.querySelector(".stop") as HTMLButtonElement;
const buttonMute = document.querySelector(".mute") as HTMLButtonElement;

const videoPlayer = new VideoPlayer(video, buttonPlay, buttonStop, buttonMute);
videoPlayer.init();
