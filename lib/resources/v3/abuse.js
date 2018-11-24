'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  createAbuseReportForGroup: meetupMethod({
    method: 'POST',
    path: '{urlname}/abuse_reports',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  createAbuseReportForMember: meetupMethod({
    method: 'POST',
    path: 'self/abuse_reports'
  }),

  getBlockStatus: meetupMethod({
    method: 'GET',
    path: 'self/blocks/{memberId}',
    urlParams: ['memberId'],
    required: ['memberId']
  }),

  blockMember: meetupMethod({
    method: 'POST',
    path: 'self/blocks/{memberId}',
    urlParams: ['memberId'],
    required: ['memberId']
  }),

  unblockMember: meetupMethod({
    method: 'DELETE',
    path: 'self/blocks/{memberId}',
    urlParams: ['memberId'],
    required: ['memberId']
  })
});
