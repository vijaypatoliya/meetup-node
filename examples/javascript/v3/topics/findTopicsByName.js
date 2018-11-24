'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var topicsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * query (The text to topic text search for)
   * 
   * (optional)
   * 
   * page
   * offset
   * desc
   * only
   * omit

   */
  var data = {
    query: 'food'
  };
  try {
    var response = await meetup.topics3.findTopicsByName(data);
  } catch (error) {
    return;
  }
};

topicsRequest();
