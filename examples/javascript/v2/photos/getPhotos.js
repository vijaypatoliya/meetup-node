'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * 
   * photo_id
   * event_id
   * group_id
   * group_urlname
   * member_id
   * photo_album_id
   * tagged
   */
  var data = {
    photo_id: 476282729
  };
  try {
    var response = await meetup.photos2.getPhotos(data);
  } catch (error) {
    return;
  }
};

photosRequest();
