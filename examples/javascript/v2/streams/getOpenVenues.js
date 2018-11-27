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
   * trickle
   */
  var data = {};
  try {
    var response = await meetup.streams.getOpenVenues(data);
  } catch (error) {
    return;
  }
};

streamsRequest();
