'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var notificationsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * since_id
   * fields
   */
  var data = {
    since_id: 644482948849258496
  };
  try {
    var response = await meetup.notifications.markAsReadNotifications(data);
  } catch (error) {
    return;
  }
};

notificationsRequest();
