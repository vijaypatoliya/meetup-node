'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required)
   * urlname
   * eventId
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  try {
    var response = await meetup.events3.closeEventRsvps(urlname, eventId);
  } catch (error) {
    return;
  }
};

eventsRequest();
