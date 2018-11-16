'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  var eventPhotoId = 476304349;
  try {
    var response = await meetup.members2.deleteEventPhoto(eventPhotoId);
  } catch (error) {
    return;
  }
};

photosRequest();
