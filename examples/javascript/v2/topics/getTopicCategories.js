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
   * fields
   * lat
   * lon
   * radius
   * page
   * offset
   * desc
   * only
   * omit

   */
  try {
    var response = await meetup.topics2.getTopicCategories();
  } catch (error) {
    return;
  }
};

topicsRequest();
