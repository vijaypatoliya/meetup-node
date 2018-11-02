'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getActivityItems: meetupMethod({
    method: 'GET',
    path: 'activity'
  })
});
