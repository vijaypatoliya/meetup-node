'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var geoRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * lon
   * page
   * offset
   * lat
   * query
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.geo.getLocations(data);
  } catch (error) {
    return;
  }
};

geoRequest();
