'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   * eventId
   * 
   * (optional)
   * 
   * page
   * fields
   * desc
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  try {
    var response = await meetup.photos3.getEventPhotos(urlname, eventId);
  } catch (error) {
    return;
  }
};

photosRequest();
