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
   * rsvp ("yes", "no" or "waitlist")
   * 
   * (optional)
   * 
   * agree_to_refund
   * comments
   * guests
   * member_id
   * opt_to_pay
   */
  var data = {
    event_id: 256006529,
    rsvp: 'no'
  }
  try {
    var response = await meetup.rsvps2.createOrUpdateRsvp(data);
  } catch (error) {
    return;
  }
};

rsvpsRequest();
