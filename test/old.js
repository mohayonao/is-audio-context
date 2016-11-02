"use strict";

const assert = require("assert");
const test = require("eatest");

class AudioContext {}

class OfflineAudioContext extends AudioContext {}

global.AudioContext = AudioContext;
global.OfflineAudioContext = OfflineAudioContext;

const isAudioContext = require("../");

test("AudioContext is instanceof AudioContext", () => {
  assert(isAudioContext(new AudioContext()) === true);
});

test("OfflineAudioContext is instance of AudioContext", () => {
  assert(isAudioContext(new OfflineAudioContext(1, 128, 44100)) === true);
});

test("Float32Array is NOT instanceo of AudioContext", () => {
  assert(isAudioContext(new Float32Array(128)) === false);
});
