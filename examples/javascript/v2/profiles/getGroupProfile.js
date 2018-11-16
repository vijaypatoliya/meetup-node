'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var profilesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_id
   * member_id
   */
  var groupId = 14876292;
  var memberId = 266277924;
  try {
    var response = await meetup.profiles2.getGroupProfile(groupId, memberId);
  } catch (error) {
    return;
  }
};

profilesRequest();
