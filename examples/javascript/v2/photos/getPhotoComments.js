'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * photo_id 
   */
  var data = {
    photo_id: 476282729
  };
  try {
    var response = await meetup.photos2.getPhotoComments(data);
  } catch (error) {
    return;
  }
};

photosRequest();
