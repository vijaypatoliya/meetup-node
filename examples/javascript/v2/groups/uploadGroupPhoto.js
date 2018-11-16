'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * 
   * group_id (alternative to group_urlname)
   * group_urlname (alternative to group_id)
   * photo
   * 
   * (optional)
   * await (If true, this ensures a response will not be returned until the upload is accessible)
   * main (Set to 'true' to have this photo become the group's main photo. Set it to 'false' otherwise. Defaults to true)
   */
  var data = {
    group_id: 29946762,
    photo: 'file',
    main: false
  };
  try {
    var response = await meetup.groups2.uploadGroupPhoto(data);
  } catch (error) {
    return;
  }
};

groupsRequest();
