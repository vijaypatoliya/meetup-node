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
   * caption (The photo caption. May be up to 255 characters. To remove a caption, just send an empty value)
   * fields (A comma-delimited list of optional response fields. Currently supported values are "comment_count", "self" and "short_link")
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var photoId = 476282729;
  var data = {
    caption: ''
  };
  try {
    var response = await meetup.photos3.updateEventPhotoInfo(urlname, eventId, photoId, data);
  } catch (error) {
    return;
  }
};

photosRequest();
