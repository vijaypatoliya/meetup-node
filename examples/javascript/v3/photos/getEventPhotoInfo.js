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
   * (optional)
   * 
   * fields
   * page
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var photoId = 476282729;
  var data = {};
  try {
    var response = await meetup.photos3.getEventPhotoInfo(urlname, eventId, photoId, data);
  } catch (error) {
    return;
  }
};

photosRequest();
