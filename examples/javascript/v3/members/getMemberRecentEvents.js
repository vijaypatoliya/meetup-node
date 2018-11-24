'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var membersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required)
   * memberId
   * 
   * (optional)
   * page
   * offset
   * desc
   * only
   * omit
   */
  var memberId = 256006529;
  var data = {};
  try {
    var response = await meetup.members3.getMemberRecentEvents(memberId, data);
  } catch (error) {
    return;
  }
};

membersRequest();
