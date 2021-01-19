/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
var createElements_1 = __importDefault(__webpack_require__(/*! ./modules/createElements */ "./src/modules/createElements.ts"));
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(targetHtml) {
        this.targetHtml = targetHtml;
        this.video = createElements_1.default.createVideo("../media/video.mp4");
        this.buttonPlay = createElements_1.default.createButton("play", "play");
        this.buttonPause = createElements_1.default.createButton("stop", "stop");
        this.buttonMute = createElements_1.default.createButton("mute", "mute");
        this.buttonVol1 = createElements_1.default.createButton("vol1", "+");
        this.buttonVol2 = createElements_1.default.createButton("vol2", "-");
        this.buttonFullScreen = createElements_1.default.createButton("full", "full");
    }
    VideoPlayer.prototype.init = function () {
        this.playVideo();
        this.pauseVideo();
        this.muteVideo();
        this.turnUpThevolume();
        this.lowerTheVolume();
        this.enableFullscreen();
        this.injectHtml();
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
    VideoPlayer.prototype.turnUpThevolume = function () {
        var _this = this;
        this.buttonVol1.addEventListener("click", function () {
            var currentVolume = Math.floor(_this.video.volume * 10) / 10;
            if (currentVolume < 1)
                _this.video.volume += 0.1;
        });
    };
    VideoPlayer.prototype.lowerTheVolume = function () {
        var _this = this;
        this.buttonVol2.addEventListener("click", function () {
            var currentVolume = Math.floor(_this.video.volume * 10) / 10;
            if (currentVolume > 0)
                _this.video.volume -= 0.1;
        });
    };
    VideoPlayer.prototype.enableFullscreen = function () {
        var _this = this;
        this.buttonFullScreen.addEventListener("click", function () {
            _this.video.requestFullscreen();
        });
    };
    VideoPlayer.prototype.injectHtml = function () {
        var target = document.querySelector("" + this.targetHtml);
        var elements = [];
        elements.push(this.video);
        elements.push(this.buttonPlay);
        elements.push(this.buttonPause);
        elements.push(this.buttonMute);
        elements.push(this.buttonVol1);
        elements.push(this.buttonVol2);
        elements.push(this.buttonFullScreen);
        elements.forEach(function (element) {
            target.append(element);
        });
    };
    return VideoPlayer;
}());
var videoPlayer = new VideoPlayer(".video-container");
videoPlayer.init();


/***/ }),

/***/ "./src/modules/createElements.ts":
/*!***************************************!*\
  !*** ./src/modules/createElements.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var createElements = /** @class */ (function () {
    function createElements() {
    }
    createElements.createButton = function (classe, text) {
        var button = document.createElement("button");
        button.innerText = text;
        button.classList.add(classe);
        return button;
    };
    createElements.createVideo = function (src, classe) {
        var video = document.createElement("video");
        video.src = src;
        if (classe) {
            video.classList.add(classe);
        }
        return video;
    };
    return createElements;
}());
exports.default = createElements;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;
//# sourceMappingURL=bundle.js.map