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
   * comment
   * event_id
   * 
   * (optional)
   * in_reply_to (replay for specific comment, so pass commentId)
   * notifications ('on' || 'off')
   */
  var data = {
    'comment': 'hello',
    'event_id': 256006529,
    'in_reply_to': 495992566,
    'notifications': 'off'
  };
  try {
    var response = await meetup.events2.createEventComment(data);
  } catch (error) {
    return;
  }
};

eventRequest();
