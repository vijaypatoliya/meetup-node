const meetupResource = require('../../Resource');
const { meetupMethod } = meetupResource.methods;

module.exports = meetupResource.extend({
  getOembedItems: meetupMethod({
    method: 'GET',
    path: 'oembed',
    required: ['url']
  })
});
