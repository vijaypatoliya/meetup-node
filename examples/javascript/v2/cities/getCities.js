'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var cityRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * country
   * query
   * lon
   * state
   * radius
   * lat
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.cities.getCities(data);
  } catch (error) {
    return;
  }
};

cityRequest();
