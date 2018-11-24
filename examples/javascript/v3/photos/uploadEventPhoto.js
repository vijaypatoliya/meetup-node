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
   * photo
   * 
   * (optional)
   * await (Optional boolean parameter that will defer a request's a response until confirmation that photo is immediately displayable is received.)
   * caption (Caption for the photo, Max length 255)
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var data = {
    photo: 'file'
  };
  try {
    var response = await meetup.photos3.uploadEventPhoto(urlname, eventId, data);
  } catch (error) {
    return;
  }
};

photosRequest();
