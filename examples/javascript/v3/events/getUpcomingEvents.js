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
   * end_time_range (The time must follow this format: HH:MM:SS)
   * lon
   * end_date_range (The date must follow this format: YYYY-MM-DDTHH:MM:SS)
   * topic_category
   * excluded_groups
   * start_date_range (The date must follow this format: YYYY-MM-DDTHH:MM:SS)
   * start_time_range (The time must follow this format: HH:MM:SS)
   * page
   * text
   * radius
   * fields
   * self_groups
   * lat
   * order
   * offset
   * desc
   * only
   * omit
   */
  var data = {}
  try {
    var response = await meetup.events3.getUpcomingEvents(data);
  } catch (error) {
    return;
  }
};

eventsRequest();
