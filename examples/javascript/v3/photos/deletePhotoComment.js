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
   * commentId
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var photoId = 476282729;
  var commentId = 55504466;
  try {
    var response = await meetup.photos3.deletePhotoComment(urlname, eventId, photoId, commentId);
  } catch (error) {
    return;
  }
};

photosRequest();
