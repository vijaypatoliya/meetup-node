'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var conciergeRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * zip
   * country
   * city
   * lon
   * text_format
   * category_id
   * page_token
   * state
   * time
   * topic_id
   * radius
   * fields
   * with_friends
   * self_groups
   * lat
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.events2.getConcierge(data);
  } catch (error) {
    return;
  }
};

conciergeRequest();
