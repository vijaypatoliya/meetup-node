'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * 
   * category_id
   * country, city, state
   * domain
   * group_id
   * group_urlname
   * lat, lon
   * member_id
   * organizer_id
   * topic
   * groupnum
   * zip
   * 
   * (optional)
   * radius
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
    var response = await meetup.groups2.getGroups(data);
  } catch (error) {
    return;
  }
};

groupsRequest();
