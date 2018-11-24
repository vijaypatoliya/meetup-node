'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  approveMembershipRequests: meetupMethod({
    method: 'POST',
    path: '{urlname}/member/approvals',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  deleteMembershipRequests: meetupMethod({
    method: 'DELETE',
    path: '{urlname}/member/approvals',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getGroupProfileList: meetupMethod({
    method: 'GET',
    path: '{urlname}/members',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  joinGroup: meetupMethod({
    method: 'POST',
    path: '{urlname}/members',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getGroupMemberProfile: meetupMethod({
    method: 'GET',
    path: '{urlname}/members/{memberId}',
    urlParams: ['urlname', 'memberId'],
    required: ['urlname', 'memberId']
  }),

  updateGroupMemberProfile: meetupMethod({
    method: 'PATCH',
    path: '{urlname}/members/{memberId}',
    urlParams: ['urlname', 'memberId'],
    required: ['urlname', 'memberId']
  }),

  deleteOrLeaveGroupMemberProfile: meetupMethod({
    method: 'DELETE',
    path: '{urlname}/members/{memberId}',
    urlParams: ['urlname', 'memberId'],
    required: ['urlname', 'memberId']
  }),

  findGroupMemberProfileByName: meetupMethod({
    method: 'GET',
    path: 'find/{urlname}/members',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getMemberProfileById: meetupMethod({
    method: 'GET',
    path: 'members/{memberId}',
    urlParams: ['memberId'],
    required: ['memberId']
  }),

  updateMemberProfileById: meetupMethod({
    method: 'PATCH',
    path: 'members/{memberId}',
    urlParams: ['memberId'],
    required: ['memberId']
  })
});
