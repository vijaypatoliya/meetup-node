'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * photo_id
   * comment
   */
  var data = {
    photo_id: 476282707,
    comment: 'Nice'
  };
  try {
    var response = await meetup.photos2.addPhotoComment(data);
  } catch (error) {
    return;
  }
};

photosRequest();
