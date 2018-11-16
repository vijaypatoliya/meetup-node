'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var venuesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * country
   * city
   * state
   * 
   * zip
   * lat
   * lon
   * 
   * text
   * group_urlname
   * 
   * (optional)
   * 
   * fields
   * lat
   * lon
   * radius
   * page
   * offset
   * desc
   * only
   * omit

   */
  var data = {
    country: 'IN',
    city: 'surat'
  };
  try {
    var response = await meetup.venues2.getOpenVenues(data);
  } catch (error) {
    return;
  }
};

venuesRequest();
