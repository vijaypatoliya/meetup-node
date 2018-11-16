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
   * group_id 
   * event_id 
   * photo_album_id
   */
  var data = {
    group_id: 29946762
  };
  try {
    var response = await meetup.photos2.getPhotoAlbums(data);
  } catch (error) {
    return;
  }
};

photosRequest();
