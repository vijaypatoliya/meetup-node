'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getEventRsvpList: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}/rsvps',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  createOrUpdateEventRsvp: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/rsvps',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  })
});
