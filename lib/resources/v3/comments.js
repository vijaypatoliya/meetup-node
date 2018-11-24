'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getEventCommentsAndRepliesList: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}/comments',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  addEventCommentsOrReplies: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/comments',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  deleteEventCommentsOrReplies: meetupMethod({
    method: 'DELETE',
    path: '{urlname}/events/{eventId}/comments/{commentId}',
    urlParams: ['urlname', 'eventId', 'commentId'],
    required: ['urlname', 'eventId', 'commentId']
  }),

  getEventCommentsAndRepliesLikes: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}/comments/{commentId}/likes',
    urlParams: ['urlname', 'eventId', 'commentId'],
    required: ['urlname', 'eventId', 'commentId']
  }),

  addEventCommentsAndRepliesLikes: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/comments/{commentId}/likes',
    urlParams: ['urlname', 'eventId', 'commentId'],
    required: ['urlname', 'eventId', 'commentId']
  }),

  deleteEventCommentsAndRepliesLikes: meetupMethod({
    method: 'DELETE',
    path: '{urlname}/events/{eventId}/comments/{commentId}/likes',
    urlParams: ['urlname', 'eventId', 'commentId'],
    required: ['urlname', 'eventId', 'commentId']
  })
});
