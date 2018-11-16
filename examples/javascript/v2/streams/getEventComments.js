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
   * event_id
   * since_count
   * since_mtime
   */
  var data = {
    api_version: 2,
    event_id: 256006529,
    // callback: null
  }
  try {
    var response = await meetup.streams.getEventComments(data);
  } catch (error) {
    return;
  }
};

streamsRequest();
