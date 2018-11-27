'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventRequest = async function () {
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
  var eventId = 256006529;
  try {
    var response = await meetup.events2.updateEvent(eventId, data);
  } catch (error) {
    return;
  }
};

eventRequest();
