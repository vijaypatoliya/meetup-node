'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getNotifications: meetupMethod({
    method: 'GET', 
    path: 'notifications'
  }),

  markAsClickedNotifications: meetupMethod({
    method: 'POST', 
    path: 'notifications/clicked'
  }),

  markAsReadNotifications: meetupMethod({
    method: 'POST', 
    path: 'notifications/read'
  })
});
