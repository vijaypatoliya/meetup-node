'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getTopicItems: meetupMethod({
    method: 'GET',
    path: 'topics'
  })
});
