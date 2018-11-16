'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventRequest = async function () {
  var eventCommentId = 495992442;
  try {
    var response = await meetup.events2.getEventComment(eventCommentId);
  } catch (error) {
    return;
  }
};

eventRequest();
