'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var venuesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   *
   * urlname
   * 
   * address_1
   * city
   * country
   * name
   * state
   * 
   * (optional)
   * 
   * address_2
   * fields
   * hours
   * phone
   * visibility
   * web_url
   */
  var urlname = 'GDG_Surat';
  var data = {};
  try {
    var response = await meetup.venues3.createMeetupVenue(urlname, data);
  } catch (error) {
    return;
  }
};

venuesRequest();
