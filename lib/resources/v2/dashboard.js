'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getDashboard: meetupMethod({
    method: 'GET',
    path: 'dashboard'
  })
});
