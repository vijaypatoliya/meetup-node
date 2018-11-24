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
   * upcoming_events
   * lon
   * filter
   * fallback_suggestions
   * location
   * text
   * topic_id
   * radius
   * fields
   * category
   * self_groups
   * lat
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.groups3.getGroups(data);
  } catch (error) {
    return;
  }
};

groupsRequest();
