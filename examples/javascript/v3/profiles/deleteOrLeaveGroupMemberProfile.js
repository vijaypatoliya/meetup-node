'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var profilesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   * memberId
   * 
   * (optional)
   * 
   * exit_comment
   */
  var urlname = 'DigitalOceanSurat';
  var memberId = 266277924;
  var data = {};
  try {
    var response = await meetup.profiles3.deleteOrLeaveGroupMemberProfile(urlname, memberId, data);
  } catch (error) {
    return;
  }
};

profilesRequest();
