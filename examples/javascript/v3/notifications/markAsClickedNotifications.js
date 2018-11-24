'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var notificationsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * notif_id
   */
  var data = {
    notif_id: 644482948849258496
  };
  try {
    var response = await meetup.notifications.markAsClickedNotifications(data);
  } catch (error) {
    return;
  }
};

notificationsRequest();
