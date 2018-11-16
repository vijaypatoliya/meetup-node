'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({

  uploadEventPhoto: meetupMethod({
    method: 'POST',
    path: '2/photo'
  }),

  updateEventPhoto: meetupMethod({
    method: 'POST',
    path: '2/photo/{eventPhotoId}',
    urlParams: ['eventPhotoId'],
    required: ['eventPhotoId']
  }),

  deleteEventPhoto: meetupMethod({
    method: 'DELETE',
    path: '2/photo/{eventPhotoId}',
    urlParams: ['eventPhotoId'],
    required: ['eventPhotoId']
  }),

  createPhotoAlbum: meetupMethod({
    method: 'POST',
    path: '2/photo_album'
  }),

  getPhotoAlbums: meetupMethod({
    method: 'GET',
    path: '2/photo_albums'
  }),

  addPhotoComment: meetupMethod({
    method: 'POST',
    path: '2/photo_comment'
  }),

  getPhotoComments: meetupMethod({
    method: 'GET',
    path: '2/photo_comments'
  }),

  getPhotos: meetupMethod({
    method: 'GET',
    path: '2/photos'
  })

});
