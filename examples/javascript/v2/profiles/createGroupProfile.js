'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var profilesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_id (Group to create the album in)
   * group_urlname (Urlname of group to join)
   * 
   * (optional)
   * 
   * intro
   * new_photo
   * photo_id
   * site_name
   * site_url
   */
  var data = {
    group_id: 29946762
  };
  try {
    var response = await meetup.profiles2.createGroupProfile(data);
  } catch (error) {
    return;
  }
};

profilesRequest();
