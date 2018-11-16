'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required parameter(s))
   * event_id
   * 
   * (optinal)
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {
    event_id: 256006529,
  };
  try {
    var response = await meetup.events2.getEventRatings(data);
  } catch (error) {
    return;
  }
};

eventRequest();
