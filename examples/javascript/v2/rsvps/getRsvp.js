'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var rsvpsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * rsvpId
   * 
   * (optional)
   * 
   * page
   * offset
   * desc
   * only
   * omit
   */
  var rsvpId = 1756965888;
  try {
    var response = await meetup.rsvps2.getRsvp(rsvpId);
  } catch (error) {
    return;
  }
};

rsvpsRequest();
