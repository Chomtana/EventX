import evx from 'eventx-core';

if (typeof window !== "undefined" && !window.evx) window.evx = evx;

require('eventx-css-event');
require('eventx-resizeobserver-event');

export default evx;