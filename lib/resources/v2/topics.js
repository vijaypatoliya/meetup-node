'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({

  getTopicCategories: meetupMethod({
    method: 'GET',
    path: '2/topic_categories'
  })

});
