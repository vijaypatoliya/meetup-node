'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({

  uploadGroupPhoto: meetupMethod({
    method: 'POST',
    path: '2/group_photo'
  }),

  getGroups: meetupMethod({
    method: 'GET',
    path: '2/groups'
  })
});
