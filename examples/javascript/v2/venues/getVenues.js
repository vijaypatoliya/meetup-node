'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var venuesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * 
   * venue_id
   * group_id
   * group_urlname
   * event_id
   * 
   * (optional)
   * 
   * order
   * page
   * offset
   * desc
   * only
   * omit

   */
  var data = {
    group_id: 29946762
  };
  try {
    var response = await meetup.venues2.getVenues(data);
  } catch (error) {
    return;
  }
};

venuesRequest();
