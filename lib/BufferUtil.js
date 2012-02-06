/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */

/**
 * Node version 0.4 and 0.6 compatibility
 */
 
try {
  module.exports = require('bufferutil');
} catch (e) {
  throw e;
}
