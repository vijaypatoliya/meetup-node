'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getGroupDiscussionBoardsList: meetupMethod({
    method: 'GET',
    path: '{urlname}/boards',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getGroupDiscussionsList: meetupMethod({
    method: 'GET',
    path: '{urlname}/boards/{bid}/discussions',
    urlParams: ['urlname', 'bid'],
    required: ['urlname', 'bid']
  }),

  getGroupDiscussionPostsList: meetupMethod({
    method: 'GET',
    path: '{urlname}/boards/{bid}/discussions/{did}',
    urlParams: ['urlname', 'bid', 'did'],
    required: ['urlname', 'bid', 'did']
  })
});
