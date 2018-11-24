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
   * response (The authenticated Member's RSVP response. Supported values are either "yes" or "no")
   * 
   * (optional)
   * 
   * agree_to_refund
   * answer_{qid}
   * guests
   * opt_to_pay
   * pro_email_share_optin
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var data = {
    response: 'no'
  };
  try {
    var response = await meetup.rsvps3.createOrUpdateEventRsvp(urlname, eventId, data);
  } catch (error) {
    return;
  }
};

rsvpsRequest();
