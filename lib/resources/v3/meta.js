'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getAPIStatus: meetupMethod({
    method: 'GET', 
    path: 'status'
  })
});
