'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var streamsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * 
   * api_version
   * since_count
   * since_mtime
   */
  try {
    var response = await meetup.streams.getOpenEvents();
  } catch (error) {
    return;
  }
};

streamsRequest();
