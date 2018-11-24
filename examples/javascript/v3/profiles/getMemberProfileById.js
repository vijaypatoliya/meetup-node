'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var profilesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * memberId
   * 
   * (optional)
   * 
   * fields
   * page
   * offset
   * desc
   * only
   * omit


   */
  var memberId = 266277924;
  var data = {};
  try {
    var response = await meetup.profiles3.getMemberProfileById(memberId, data);
  } catch (error) {
    return;
  }
};

profilesRequest();
