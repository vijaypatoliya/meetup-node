'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var topicsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * 
   * lon
   * fields
   * radius
   * lat
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.topics3.findTopicCategories(data);
  } catch (error) {
    return;
  }
};

topicsRequest();
