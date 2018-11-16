'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var membersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * photo
   * 
   * (optional)
   * await (If true, this ensures a response will not be returned until the upload is accessible)
   * main (Set to 'true' to have this photo become the group's main photo. Set it to 'false' otherwise. Defaults to true)
   * sync_matching_photo (When set to true and main is set to true, this will replace all group profile photos matching the current photo with the provided replacement)
   * sync_photo (When set to true, this parameter will sync all of the group profile photos for the member with the provided photo_id)
   */
  var data = {
    photo: 'file',
    main: false
  }
  try {
    var response = await meetup.members2.uploadMemberPhoto(data);
  } catch (error) {
    return;
  }
};

membersRequest();
