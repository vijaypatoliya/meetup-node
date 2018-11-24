'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var rsvpsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   * eventId
   * 
   * (optional)
   * 
   * fields
   * response
   * order
   * desc
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var data = {};
  try {
    var response = await meetup.rsvps3.getEventRsvpList(urlname, eventId, data);
  } catch (error) {
    return;
  }
};

rsvpsRequest();
