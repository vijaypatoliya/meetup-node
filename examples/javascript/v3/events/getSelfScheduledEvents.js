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
   * no_later_than
   * no_earlier_than
   * rsvp
   * scroll
   * fields
   * page
   * offset
   * status
   * desc
   * only
   * omit
   */
  var data = {}
  try {
    var response = await meetup.events3.getSelfScheduledEvents(data);
  } catch (error) {
    return;
  }
};

eventsRequest();
