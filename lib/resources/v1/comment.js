'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getCommentItems: meetupMethod({
    method: 'GET',
    path: 'comments',
    required: ['group_id']
  })
});
