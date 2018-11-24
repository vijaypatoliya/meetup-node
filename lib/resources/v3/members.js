'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getMemberRecentEvents: meetupMethod({
    method: 'GET', 
    path: 'internal/{memberId}/recent_events',
    urlParams: ['memberId'],
    required: ['memberId']
  })
});
