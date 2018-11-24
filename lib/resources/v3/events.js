'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getEventsList: meetupMethod({
    method: 'GET',
    path: '{urlname}/events',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  creatEvent: meetupMethod({
    method: 'POST',
    path: '{urlname}/events',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  closeEventRsvps: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/rsvps/close',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  openEventRsvps: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/rsvps/open',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  getEventData: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  updateEvent: meetupMethod({
    method: 'PATCH',
    path: '{urlname}/events/{eventId}',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  deleteEvent: meetupMethod({
    method: 'DELETE',
    path: '{urlname}/events/{eventId}',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  getEventAttendanceRecords: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}/attendance',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  addEventAttendance: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/attendance',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  addEventPayment: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/payments',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  getUpcomingEvents: meetupMethod({
    method: 'GET',
    path: 'find/upcoming_events'
  }),

  getSelfCalenderSavedUpcomingEvents: meetupMethod({
    method: 'GET',
    path: '/self/calendar'
  }),

  getSelfScheduledEvents: meetupMethod({
    method: 'GET',
    path: '/self/events'
  })
});
