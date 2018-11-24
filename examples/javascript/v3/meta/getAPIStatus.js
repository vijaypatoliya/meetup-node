'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var metaRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.meta.getAPIStatus(data);
  } catch (error) {
    return;
  }
};

metaRequest();
