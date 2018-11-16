'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var rsvpsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * event_id
   * 
   * (optional)
   * 
   * rsvp
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {
    event_id: 256006529
  }
  try {
    var response = await meetup.rsvps2.getRsvps(data);
  } catch (error) {
    return;
  }
};

rsvpsRequest();
