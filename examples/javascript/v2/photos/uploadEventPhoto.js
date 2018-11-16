'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * event_id
   * photo
   * photo_album_id
   * 
   * (optional)
   * await (If true, this ensures a response will not be returned until the upload is accessible)
   * caption (Caption for the photo)
   */
  var data = {
    event_id: 256006529,
    photo: 'file'
  };
  try {
    var response = await meetup.photos2.uploadMemberPhoto(data);
  } catch (error) {
    return;
  }
};

photosRequest();
