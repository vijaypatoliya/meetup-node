'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({

  getMember: meetupMethod({
    method: 'GET',
    path: '2/member/{memberId}',
    urlParams: ['memberId'],
    required: ['memberId']
  }),

  updateMember: meetupMethod({
    method: 'POST',
    path: '2/member/{memberId}',
    urlParams: ['memberId'],
    required: ['memberId']
  }),

  uploadMemberPhoto: meetupMethod({
    method: 'POST',
    path: '2/member_photo'
  }),

  deleteMemberPhoto: meetupMethod({
    method: 'DELETE',
    path: '2/member_photo/{memberPhotoId}',
    urlParams: ['memberPhotoId'],
    required: ['memberPhotoId']
  }),

  getMembers: meetupMethod({
    method: 'GET',
    path: '2/members'
  })
});
