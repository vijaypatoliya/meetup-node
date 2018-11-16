'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getCities: meetupMethod({
    method: 'GET',
    path: '2/cities'
  })
});
