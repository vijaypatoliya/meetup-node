const meetupResource = require('../../Resource');
const { meetupMethod } = meetupResource.methods;

module.exports = meetupResource.extend({
  getCommentItems: meetupMethod({
    method: 'GET',
    path: 'comments',
    required: ['group_id'],
  })
});
