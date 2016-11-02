"use strict";

const assert = require("assert");
const test = require("eatest");

const isAudioContext = require("../");

test("Float32Array is NOT instanceo of AudioContext", () => {
  assert(isAudioContext(new Float32Array(128)) === false);
});
