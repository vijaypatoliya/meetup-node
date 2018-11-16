'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * comment_id
   * member_id
   * group_id
   * event_id
   * 
   * (optional)
   * fields
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {
    event_id: 256006529
  };
  try {
    var response = await meetup.events2.getEventComments(data);
  } catch (error) {
    return;
  }
};

eventRequest();
