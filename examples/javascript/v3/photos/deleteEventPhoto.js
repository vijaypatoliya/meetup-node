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
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var photoId = 476282729;
  try {
    var response = await meetup.photos3.deleteEventPhoto(urlname, eventId, photoId);
  } catch (error) {
    return;
  }
};

photosRequest();
