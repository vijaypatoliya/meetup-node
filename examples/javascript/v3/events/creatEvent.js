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
   * name (name of the event)
   * 
   * (optional)
   * 
   * announce
   * description
   * duration
   * event_hosts
   * featured_photo_id
   * fee.accepts
   * fee.amount
   * fee.currency
   * fee.refund_policy
   * guest_limit
   * how_to_find_us
   * lat
   * lon
   * publish_status
   * question
   * rsvp_close_time
   * rsvp_limit
   * rsvp_open_time
   * self_rsvp
   * time
   * venue_id
   * venue_visibility
   */
  var urlname = 'GDG_Surat';
  var data = {
    'description': "<p>Pleased to announce our next meetup with a wonderful venue in the heart of the Surat city. We have gone far and wide this time with Einstein and wave analytics!</p>",
    'duration': 7200000,
    'group_id': 19946960,
    'group_urlname': 'Surat-Salesforce-Developer-Group',
    'guest_limit': 100,
    'hosts': 266277924,
    'how_to_find_us': '',
    'name': 'November meetup',
    'publish_status': 'published',
    // 'question_{index}': '',
    'rsvp_close': 1,
    'rsvp_limit': 40,
    // 'rsvp_open': ,
    'simple_html_description': "<p>Pleased to announce our next meetup with a wonderful venue in the heart of the Surat city. We have gone far and wide this time with Einstein and wave analytics!</p>",
    'time': 1542454200000,
    'venue_id': 25956433,
    'venue_visibility': 'public',
    'why': 'meetup for knowledge'

  };
  try {
    var response = await meetup.events3.creatEvent(urlname, data);
  } catch (error) {
    return;
  }
};

eventsRequest();
