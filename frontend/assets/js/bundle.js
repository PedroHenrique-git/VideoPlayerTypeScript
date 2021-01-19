/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

/* eslint-disable no-useless-constructor */
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(video, buttonPlay, buttonPause, buttonMute, buttonVol1, buttonVol2, buttonFullScreen) {
        this.video = video;
        this.buttonPlay = buttonPlay;
        this.buttonPause = buttonPause;
        this.buttonMute = buttonMute;
        this.buttonVol1 = buttonVol1;
        this.buttonVol2 = buttonVol2;
        this.buttonFullScreen = buttonFullScreen;
    }
    VideoPlayer.prototype.init = function () {
        this.playVideo();
        this.pauseVideo();
        this.muteVideo();
    };
    VideoPlayer.prototype.playVideo = function () {
        var _this = this;
        this.buttonPlay.addEventListener("click", function () {
            _this.video.play();
        });
    };
    VideoPlayer.prototype.pauseVideo = function () {
        var _this = this;
        this.buttonPause.addEventListener("click", function () {
            _this.video.pause();
        });
    };
    VideoPlayer.prototype.muteVideo = function () {
        var _this = this;
        if (this.buttonMute) {
            this.buttonMute.addEventListener("click", function () {
                _this.video.muted = !_this.video.muted;
            });
        }
    };
    return VideoPlayer;
}());
var video = document.querySelector("video");
var buttonPlay = document.querySelector(".play");
var buttonStop = document.querySelector(".stop");
var buttonMute = document.querySelector(".mute");
var videoPlayer = new VideoPlayer(video, buttonPlay, buttonStop, buttonMute);
videoPlayer.init();

/******/ })()
;
//# sourceMappingURL=bundle.js.map