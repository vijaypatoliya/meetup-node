'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {}
  try {
    var response = await meetup.events3.getSelfCalenderSavedUpcomingEvents(data);
  } catch (error) {
    return;
  }
};

eventsRequest();
