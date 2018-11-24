'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  findTopicCategories: meetupMethod({
    method: 'GET',
    path: 'find/topic_categories'
  }),

  findTopicsByName: meetupMethod({
    method: 'GET',
    path: 'find/topics'
  }),

  getRecommendGroupTopics: meetupMethod({
    method: 'GET',
    path: 'recommended/group_topics'
  })
});
