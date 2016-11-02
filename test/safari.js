"use strict";

const assert = require("assert");
const test = require("eatest");

class webkitAudioContext {}

class webkitOfflineAudioContext extends webkitAudioContext {}

global.webkitAudioContext = webkitAudioContext;
global.webkitOfflineAudioContext = webkitOfflineAudioContext;

const isAudioContext = require("../");

test("AudioContext is instanceof AudioContext", () => {
  assert(isAudioContext(new webkitAudioContext()) === true);
});

test("OfflineAudioContext is instance of AudioContext", () => {
  assert(isAudioContext(new webkitOfflineAudioContext(1, 128, 44100)) === true);
});

test("Float32Array is NOT instanceo of AudioContext", () => {
  assert(isAudioContext(new Float32Array(128)) === false);
});
