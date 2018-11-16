'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({

  getEventComments: meetupMethod({
    method: 'GET',
    path: '2/event_comments'
  }),

  getOpenEvents: meetupMethod({
    method: 'GET',
    path: '2/open_events'
  }),

  getOpenVenues: meetupMethod({
    method: 'GET',
    path: '2/open_venues'
  }),

  getPhotos: meetupMethod({
    method: 'GET',
    path: '2/photos'
  }),

  getRsvps: meetupMethod({
    method: 'GET',
    path: '2/rsvps'
  })

});
