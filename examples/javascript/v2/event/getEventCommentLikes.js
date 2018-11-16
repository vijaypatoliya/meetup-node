'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required parameter(s))
   * comment_id
   */
  var data ={
    comment_id: 256006529
  };
  try {
    var response = await meetup.events2.getEventCommentLikes(data);
  } catch (error) {
    return;
  }
};

eventRequest();
