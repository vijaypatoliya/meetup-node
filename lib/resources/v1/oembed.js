'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getOembedItems: meetupMethod({
    method: 'GET',
    path: 'oembed',
    required: ['url']
  })
});
