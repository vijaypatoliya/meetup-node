const meetupResource = require('../../Resource');
const { meetupMethod } = meetupResource.methods;

module.exports = meetupResource.extend({
  getActivityItems: meetupMethod({
    method: 'GET',
    path: 'activity',
  })
});
