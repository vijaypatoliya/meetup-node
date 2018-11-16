'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({

  getOpenVenues: meetupMethod({
    method: 'GET',
    path: '2/open_venues'
  }),

  getVenues: meetupMethod({
    method: 'GET',
    path: '2/venues'
  })

});
