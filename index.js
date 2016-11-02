"use strict";

var AudioContext = global.AudioContext || global.webkitAudioContext;
var OfflineAudioContext = global.OfflineAudioContext || global.webkitOfflineAudioContext;

function isAudioContext(context) {
  return (!!AudioContext && context instanceof AudioContext) || (!!OfflineAudioContext && context instanceof OfflineAudioContext);
}

module.exports = isAudioContext;
