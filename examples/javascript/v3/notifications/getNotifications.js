'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var notificationsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.notifications.getNotifications(data);
  } catch (error) {
    return;
  }
};

notificationsRequest();
