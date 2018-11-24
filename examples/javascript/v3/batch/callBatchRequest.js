'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var batchRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   */
  var data = {};
  try {
    var response = await meetup.batch.callBatchRequest(data);
  } catch (error) {
    return;
  }
};

batchRequest();
