'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var dashboardRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.dashboard.getDashboard(data);
  } catch (error) {
    return;
  }
};

dashboardRequest();
