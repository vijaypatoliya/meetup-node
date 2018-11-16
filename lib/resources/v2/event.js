'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getConcierge: meetupMethod({
    method: 'GET',
    path: '2/concierge'
  }),

  createEvent: meetupMethod({
    method: 'POST',
    path: '2/event'
  }),

  updateEvent: meetupMethod({
    method: 'POST',
    path: '2/event/{eventId}',
    urlParams: ['eventId'],
    required: ['eventId']
  }),

  deleteEvent: meetupMethod({
    method: 'DELETE',
    path: '2/event/{eventId}',
    urlParams: ['eventId'],
    required: ['eventId']
  }),

  getEvents: meetupMethod({
    method: 'GET',
    path: '2/events',
    required: ['group_id']
  }),

  createEventComment: meetupMethod({
    method: 'POST',
    path: '2/event_comment'
  }),

  getEventComment: meetupMethod({
    method: 'GET',
    path: '2/event_comment/{eventCommentId}',
    urlParams: ['eventCommentId'],
    required: ['eventCommentId']
  }),

  deleteEventComment: meetupMethod({
    method: 'DELETE',
    path: '2/event_comment/{eventCommentId}',
    urlParams: ['eventCommentId'],
    required: ['eventCommentId']
  })
});
