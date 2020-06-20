"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _package = require("./package.json");

/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
var config = {
  alternateRefs: [{
    href: "".concat(_package.homepage, "/pt"),
    hreflang: 'pt'
  }],
  generateRobotsTxt: true,
  siteUrl: _package.homepage
};
var _default = config;
exports["default"] = _default;
module.exports = exports.default;
