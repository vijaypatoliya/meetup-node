'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required parameter(s))
   * urlname
   * eventId
   * 
   * (optional)
   * 
   * name (name of the event)
   * announce
   * description
   * duration
   * event_hosts
   * featured_photo_id
   * guest_limit
   * how_to_find_us
   * lat
   * lon
   * name
   * publish_status
   * question
   * rsvp_close_time
   * rsvp_limit
   * rsvp_open_time
   * time
   * venue_id
   * venue_visibility

   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var data = {
    'guest_limit': 100
  };
  try {
    var response = await meetup.events3.updateEvent(urlname, eventId, data);
  } catch (error) {
    return;
  }
};

eventsRequest();
