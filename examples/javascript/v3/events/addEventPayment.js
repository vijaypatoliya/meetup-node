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
   * amount (amount of money)
   * status (Must be one of: noshow, absent, attended)
   * paid_on (Defaults to now)
   * quantity (Defaults to 1)
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var data = {
    member: 266277924,
    amount: 100
  }
  try {
    var response = await meetup.events3.addEventPayment(urlname, eventId, data);
  } catch (error) {
    return;
  }
};

eventsRequest();
