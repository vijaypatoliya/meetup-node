'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getProGroups: meetupMethod({
    method: 'GET', 
    path: 'pro/{urlname}/groups',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getProGroupsMembers: meetupMethod({
    method: 'GET', 
    path: 'pro/{urlname}/members',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getProGroupsTickets: meetupMethod({
    method: 'GET', 
    path: 'pro/{urlname}/tickets',
    urlParams: ['urlname'],
    required: ['urlname']
  })
});
