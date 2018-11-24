'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getHostsForEvent: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}/hosts',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  })
});
