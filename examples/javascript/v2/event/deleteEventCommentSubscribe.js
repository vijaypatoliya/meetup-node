'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventRequest = async function () {
  var eventCommentId = 256006529;
  try {
    var response = await meetup.events2.deleteEventCommentSubscribe(eventCommentId);
  } catch (error) {
    return;
  }
};

eventRequest();
