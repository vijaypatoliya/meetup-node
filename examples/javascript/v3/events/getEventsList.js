'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var eventsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required)
   * urlname
   */
  var urlname = 'GDG_Surat';
  try {
    var response = await meetup.events3.getEventsList(urlname);
  } catch (error) {
    return;
  }
};

eventsRequest();
