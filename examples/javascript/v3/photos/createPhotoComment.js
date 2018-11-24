'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * urlname
   * eventId
   * photoId
   * 
   * comment
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var photoId = 476282729;
  var data = {
    comment: 'Good'
  };
  try {
    var response = await meetup.photos3.createPhotoComment(urlname, eventId, photoId, data);
  } catch (error) {
    return;
  }
};

photosRequest();
