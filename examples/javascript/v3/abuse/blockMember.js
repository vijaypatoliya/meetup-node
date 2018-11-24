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
   * 
   * (optional)
   * comments
   * report (Acceptable values include one of the following: fake, impersonation, inappropriate_photo, offsite, underage)
   */
  var memberId = 266277924;
  var data = {
    comments: '',
    report: 'inappropriate_photo'
  }
  try {
    var response = await meetup.abuse.blockMember(memberId, data);
  } catch (error) {
    return;
  }
};

abuseRequest();
