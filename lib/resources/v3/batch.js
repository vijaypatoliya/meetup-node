'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  callBatchRequest: meetupMethod({
    method: 'POST',
    path: 'batch'
  })
});
