'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getPreference: meetupMethod({
    method: 'GET', 
    path: '{urlname}/preferences/{domain}',
    urlParams: ['urlname', 'domain'],
    required: ['urlname', 'domain']
  }),

  updatePreference: meetupMethod({
    method: 'PATCH', 
    path: '{urlname}/preferences/{domain}',
    urlParams: ['urlname', 'domain'],
    required: ['urlname', 'domain']
  })
});
