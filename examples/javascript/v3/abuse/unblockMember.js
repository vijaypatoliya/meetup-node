'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var abuseRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required)
   * member_id
   */
  var memberId = 266277924;
  try {
    var response = await meetup.abuse.unblockMember(memberId);
  } catch (error) {
    return;
  }
};

abuseRequest();
