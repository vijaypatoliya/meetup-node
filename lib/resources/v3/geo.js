'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getLocations: meetupMethod({
    method: 'GET',
    path: 'find/locations'
  })
});
