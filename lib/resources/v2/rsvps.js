'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({

  createOrUpdateRsvp: meetupMethod({
    method: 'POST',
    path: '2/rsvp'
  }),

  getRsvp: meetupMethod({
    method: 'GET',
    path: '2/rsvp/{rsvpId}',
    urlParams: ['rsvpId'],
    required: ['rsvpId']
  }),

  getRsvps: meetupMethod({
    method: 'GET',
    path: '2/rsvps'
  })

});
