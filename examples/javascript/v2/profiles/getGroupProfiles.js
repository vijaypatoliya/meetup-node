'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var profilesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * 
   * group_id
   * group_urlname
   * member_id
   * 
   * (optional)
   * 
   * status
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {
    group_id: 14876292,
    member_id: 266277924
  }
  try {
    var response = await meetup.profiles2.getGroupProfiles(data);
  } catch (error) {
    return;
  }
};

profilesRequest();
