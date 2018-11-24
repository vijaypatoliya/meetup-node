'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var venuesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   *
   * text (Raw full text search query)
   * 
   * (optional)
   * 
   * zip
   * country
   * location
   * lon
   * radius
   * fields
   * lat
   * desc
   * order
   * page
   * offset
   * only
   * omit
   */
  var data = {
    text: 'food'
  };
  try {
    var response = await meetup.venues3.findVenuesByLocation(data);
  } catch (error) {
    return;
  }
};

venuesRequest();
