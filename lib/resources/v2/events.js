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
  }),

  createEventCommentFlag: meetupMethod({
    method: 'POST',
    path: '2/event_comment_flag'
  }),

  addEventCommentLike: meetupMethod({
    method: 'POST',
    path: '2/event_comment_like/{eventCommentId}',
    urlParams: ['eventCommentId'],
    required: ['eventCommentId']
  }),

  deleteEventCommentLike: meetupMethod({
    method: 'DELETE',
    path: '2/event_comment_like/{eventCommentId}',
    urlParams: ['eventCommentId'],
    required: ['eventCommentId']
  }),

  getEventCommentLikes: meetupMethod({
    method: 'GET',
    path: '2/event_comment_likes'
  }),

  addEventCommentSubscribe: meetupMethod({
    method: 'POST',
    path: '2/event_comment_subscribe/{eventCommentId}',
    urlParams: ['eventCommentId'],
    required: ['eventCommentId']
  }),

  deleteEventCommentSubscribe: meetupMethod({
    method: 'DELETE',
    path: '2/event_comment_subscribe/{eventCommentId}',
    urlParams: ['eventCommentId'],
    required: ['eventCommentId']
  }),

  getEventComments: meetupMethod({
    method: 'GET',
    path: '2/event_comments'
  }),

  addEventRating: meetupMethod({
    method: 'POST',
    path: '2/event_rating'
  }),

  getEventRatings: meetupMethod({
    method: 'GET',
    path: '2/event_ratings'
  }),

  getOpenEvents: meetupMethod({
    method: 'GET',
    path: '2/open_events',
    required: ['group_id']
  })
});
