export default class createElements {
  static createButton(classe: string, text: string): HTMLButtonElement {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add(classe);
    return button;
  }

  static createVideo(src: string, classe?: string): HTMLVideoElement {
    const video = document.createElement("video");
    video.src = src;
    if (classe) {
      video.classList.add(classe);
    }
    return video;
  }
}
