/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import createElements from "./modules/createElements";

class VideoPlayer {
  private video: HTMLVideoElement;

  private buttonPlay: HTMLButtonElement;

  private buttonPause: HTMLButtonElement;

  private buttonMute: HTMLButtonElement;

  private buttonVol1: HTMLButtonElement;

  private buttonVol2: HTMLButtonElement;

  private buttonFullScreen: HTMLButtonElement;

  constructor(private targetHtml: string) {
    this.video = createElements.createVideo("../media/video.mp4");
    this.buttonPlay = createElements.createButton("play", "play");
    this.buttonPause = createElements.createButton("stop", "stop");
    this.buttonMute = createElements.createButton("mute", "mute");
    this.buttonVol1 = createElements.createButton("vol1", "+");
    this.buttonVol2 = createElements.createButton("vol2", "-");
    this.buttonFullScreen = createElements.createButton("full", "full");
  }

  init(): void {
    this.playVideo();
    this.pauseVideo();
    this.muteVideo();
    this.turnUpThevolume();
    this.lowerTheVolume();
    this.enableFullscreen();
    this.injectHtml();
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

  turnUpThevolume(): void {
    this.buttonVol1.addEventListener("click", () => {
      const currentVolume: number = Math.floor(this.video.volume * 10) / 10;
      if (currentVolume < 1) this.video.volume += 0.1;
    });
  }

  lowerTheVolume(): void {
    this.buttonVol2.addEventListener("click", () => {
      const currentVolume: number = Math.floor(this.video.volume * 10) / 10;
      if (currentVolume > 0) this.video.volume -= 0.1;
    });
  }

  enableFullscreen(): void {
    this.buttonFullScreen.addEventListener("click", () => {
      this.video.requestFullscreen();
    });
  }

  injectHtml(): void {
    const target = document.querySelector(`${this.targetHtml}`) as HTMLElement;
    const elements: Array<HTMLElement> = [];
    elements.push(this.video);
    elements.push(this.buttonPlay);
    elements.push(this.buttonPause);
    elements.push(this.buttonMute);
    elements.push(this.buttonVol1);
    elements.push(this.buttonVol2);
    elements.push(this.buttonFullScreen);

    elements.forEach((element) => {
      target.append(element);
    });
  }
}

const videoPlayer = new VideoPlayer(".video-container");
videoPlayer.init();
