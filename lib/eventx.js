'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventxCore = require('eventx-core');

var _eventxCore2 = _interopRequireDefault(_eventxCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== "undefined" && !window.evx) window.evx = _eventxCore2.default;

require('eventx-css-event');
require('eventx-resizeobserver-event');

exports.default = _eventxCore2.default;