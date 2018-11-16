'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var membersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * 
   * member_id
   * group_id
   * group_urlname
   * topic,groupnum
   * 
   * (optional)
   * 
   * fields
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {
    group_id: 29946762
  };
  try {
    var response = await meetup.members2.getMembers(data);
  } catch (error) {
    return;
  }
};

membersRequest();
