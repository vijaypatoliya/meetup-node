'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * 
   * zip
   * country
   * instant_join_only
   * location
   * lon
   * topic_id
   * sort
   * radius
   * fields
   * category
   * lat
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.groups3.getRecommendedGroups(data);
  } catch (error) {
    return;
  }
};

groupsRequest();
