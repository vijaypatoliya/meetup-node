'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var membersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * group_id (Group to create the album in)
   * title (Title of the new album)
   */
  var data = {
    group_id: 29946762,
    title: 'New Album'
  };
  try {
    var response = await meetup.photos2.createPhotoAlbum(data);
  } catch (error) {
    return;
  }
};

membersRequest();
