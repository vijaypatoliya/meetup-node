'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({

  createGroupProfile: meetupMethod({
    method: 'POST',
    path: '2/profile'
  }),

  getGroupProfile: meetupMethod({
    method: 'GET',
    path: '2/profile/{groupId}/{memberId}',
    urlParams: ['groupId', 'memberId'],
    required: ['groupId', 'memberId']
  }),

  updateGroupProfile: meetupMethod({
    method: 'POST',
    path: '2/profile/{groupId}/{memberId}',
    urlParams: ['groupId', 'memberId'],
    required: ['groupId', 'memberId']
  }),

  deleteGroupProfile: meetupMethod({
    method: 'DELETE',
    path: '2/profile/{groupId}/{memberId}',
    urlParams: ['groupId', 'memberId'],
    required: ['groupId', 'memberId']
  }),

  getGroupProfiles: meetupMethod({
    method: 'GET',
    path: '2/profiles'
  })
});
