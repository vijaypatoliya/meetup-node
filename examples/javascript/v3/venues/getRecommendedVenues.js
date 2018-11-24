'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var venuesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   *
   * (optional)
   * 
   * zip
   * country
   * used_between
   * min_groups
   * group_id
   * location
   * lon
   * radius
   * category
   * group_urlname
   * lat
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.venues3.getRecommendedVenues(data);
  } catch (error) {
    return;
  }
};

venuesRequest();
