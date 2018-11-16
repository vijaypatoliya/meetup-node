'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * 
   * lat
   * lon
   * zip
   * 
   * country
   * city
   * state
   * 
   * topic
   * text
   * category
   * 
   * (optional)
   * and_text
   * limited_events
   * text_format
   * time
   * radius
   * time
   * fields
   * status
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {
    country: 'in',
    city: 'surat'
  };
  try {
    var response = await meetup.events2.getOpenEvents(data);
  } catch (error) {
    return;
  }
};

eventRequest();
