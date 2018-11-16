'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * group_id
   * rsvp
   * group_urlname
   * event_id
   * group_domain
   * venue_id
   * member_id
   * 
   * (optional)
   * limited_events
   * text_format
   * time
   * fields
   * status
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.events2.getEvents(data);
  } catch (error) {
    return;
  }
};

eventRequest();
