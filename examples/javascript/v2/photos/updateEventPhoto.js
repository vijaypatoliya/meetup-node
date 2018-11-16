'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * caption (Caption for the photo)
   */
  var eventPhotoId = 476304349,
  var data = {
    caption: 'New Image'
  };
  try {
    var response = await meetup.photos2.updateEventPhoto(eventPhotoId, data);
  } catch (error) {
    return;
  }
};

photosRequest();
