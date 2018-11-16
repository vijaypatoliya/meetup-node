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
   * rating 
   */
  var data = {
    event_id: 256006529,
    rating: 3
  };
  try {
    var response = await meetup.events2.addEventRating(data);
  } catch (error) {
    return;
  }
};

eventRequest();
