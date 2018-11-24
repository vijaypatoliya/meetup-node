'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getGroupPreviousVenus: meetupMethod({
    method: 'GET',
    path: '{urlname}/venues',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  createMeetupVenue: meetupMethod({
    method: 'POST',
    path: '{urlname}/venues',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  findVenuesByLocation: meetupMethod({
    method: 'GET',
    path: 'find/venues'
  }),

  getRecommendedVenues: meetupMethod({
    method: 'GET',
    path: 'recommended/venues'
  })
});
