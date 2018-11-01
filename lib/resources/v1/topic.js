const meetupResource = require('../../Resource');
const { meetupMethod } = meetupResource.methods;

module.exports = meetupResource.extend({
  getTopicItems: meetupMethod({
    method: 'GET',
    path: 'topics'
  })
});
