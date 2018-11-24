'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getGroup: meetupMethod({
    method: 'GET',
    path: '{urlname}',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  updateGroup: meetupMethod({
    method: 'POST',
    path: '{urlname}',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getSimilarGroups: meetupMethod({
    method: 'GET',
    path: '{urlname}/similar_groups',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  addGroupTopics: meetupMethod({
    method: 'POST',
    path: '{urlname}/topics',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  removeGroupTopics: meetupMethod({
    method: 'DELETE',
    path: '{urlname}/topics',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getGroups: meetupMethod({
    method: 'GET',
    path: 'find/groups'
  }),

  getRecommendedGroups: meetupMethod({
    method: 'GET',
    path: 'recommended/groups'
  }),

  ignoreRecommendedGroups: meetupMethod({
    method: 'POST',
    path: 'recommended/groups/ignores/{urlname}',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getSelfGroups: meetupMethod({
    method: 'GET',
    path: 'self/groups'
  })
});
