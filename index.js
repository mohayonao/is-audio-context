"use strict";

var AudioContext = global.AudioContext || global.webkitAudioContext;
var OfflineAudioContext = global.OfflineAudioContext || global.webkitOfflineAudioContext;

function isAudioContext(context) {
  return context instanceof AudioContext || context instanceof OfflineAudioContext;
}

module.exports = isAudioContext;
