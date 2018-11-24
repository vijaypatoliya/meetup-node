'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var profilesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * memberId
   * 
   * (optional)
   * 
   * add_topics
   * bio
   * bio_privacy
   * birthday
   * city_id
   * facebook_privacy
   * gender
   * groups_privacy
   * lang
   * lat
   * lon
   * messaging_pref
   * name
   * photo_id
   * remove_topics
   * sync_photo
   * topics_privacy
   * zip
   */
  var memberId = 266277924;
  var data = {
    gender: 'male'
  };
  try {
    var response = await meetup.profiles3.updateMemberProfileById(memberId, data);
  } catch (error) {
    return;
  }
};

profilesRequest();
