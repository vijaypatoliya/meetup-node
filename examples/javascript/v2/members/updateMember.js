'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var membersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * add_topics
   * bio
   * bio_privacy
   * birthday
   * city
   * city_id
   * country
   * facebook_privacy (visible, hidden)
   * gender (other, none, female, male)
   * groups_privacy (visible, hidden)
   * hometown
   * lang
   * lat
   * lon
   * messaging_pref
   * name
   * photo_id
   * photos_privacy (visible, hidden)
   * radius
   * remove_topics
   * sync_photo
   * topics_privacy
   * zip
   */
  var data = {
    city_id: 1018099, // pass city id here given id of surat // u can get cties id from /2/cities api
    add_topics: 18528 // pass topic id here given id of Foodie topic
  }
  var memberId = '266277924',
  try {
    var response = await meetup.members2.updateMember(memberId, data);
  } catch (error) {
    return;
  }
};

membersRequest();
