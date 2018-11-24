'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var hostsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required)
   * urlname
   * eventId
   * 
   * (optional)
   * fields
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var data = {};
  try {
    var response = await meetup.hosts.getHostsForEvent(urlname, eventId, data);
  } catch (error) {
    return;
  }
};

hostsRequest();
