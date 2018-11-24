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
   * member (memberId)
   * status (Must be one of: noshow, absent, attended)
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var data = {
    member: 266277924,
    status: 'absent'
  }
  try {
    var response = await meetup.events3.addEventAttendance(urlname, eventId, data);
  } catch (error) {
    return;
  }
};

eventsRequest();
