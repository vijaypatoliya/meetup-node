'use strict';

var meetupResource = require('../../Resource');
var meetupMethod = meetupResource.methods.meetupMethod;

module.exports = meetupResource.extend({
  getEventPhotos: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}/photos',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  uploadEventPhoto: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/photos',
    urlParams: ['urlname', 'eventId'],
    required: ['urlname', 'eventId']
  }),

  getEventPhotoInfo: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}/photos/{PhotoId}',
    urlParams: ['urlname', 'eventId', 'PhotoId'],
    required: ['urlname', 'eventId', 'PhotoId']
  }),

  updateEventPhotoInfo: meetupMethod({
    method: 'PATCH',
    path: '{urlname}/events/{eventId}/photos/{PhotoId}',
    urlParams: ['urlname', 'eventId', 'PhotoId'],
    required: ['urlname', 'eventId', 'PhotoId']
  }),

  deleteEventPhoto: meetupMethod({
    method: 'DELETE',
    path: '{urlname}/events/{eventId}/photos/{PhotoId}',
    urlParams: ['urlname', 'eventId', 'PhotoId'],
    required: ['urlname', 'eventId', 'PhotoId']
  }),

  getPhotoComments: meetupMethod({
    method: 'GET',
    path: '{urlname}/events/{eventId}/photos/{PhotoId}/comments',
    urlParams: ['urlname', 'eventId', 'PhotoId'],
    required: ['urlname', 'eventId', 'PhotoId']
  }),

  createPhotoComment: meetupMethod({
    method: 'POST',
    path: '{urlname}/events/{eventId}/photos/{PhotoId}/comments',
    urlParams: ['urlname', 'eventId', 'PhotoId'],
    required: ['urlname', 'eventId', 'PhotoId']
  }),

  deletePhotoComment: meetupMethod({
    method: 'DELETE',
    path: '{urlname}/events/{eventId}/photos/{PhotoId}/comments/{commentId}',
    urlParams: ['urlname', 'eventId', 'PhotoId', 'commentId'],
    required: ['urlname', 'eventId', 'PhotoId', 'commentId']
  }),

  getPhotoAlbumList: meetupMethod({
    method: 'GET',
    path: '{urlname}/photo_albums',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  getPhotoAlbumInfo: meetupMethod({
    method: 'GET',
    path: '{urlname}/photo_albums/{albumId}',
    urlParams: ['urlname', 'albumId'],
    required: ['urlname', 'albumId']
  }),

  getPhotosOfAlbum: meetupMethod({
    method: 'GET',
    path: '{urlname}/photo_albums/{albumId}/photos',
    urlParams: ['urlname', 'albumId'],
    required: ['urlname', 'albumId']
  }),

  uploadAlbumPhoto: meetupMethod({
    method: 'POST',
    path: '{urlname}/photo_albums/{albumId}/photos',
    urlParams: ['urlname', 'albumId'],
    required: ['urlname', 'albumId']
  }),

  getAllAlbumPhotos: meetupMethod({
    method: 'GET',
    path: '{urlname}/photos',
    urlParams: ['urlname'],
    required: ['urlname']
  }),

  uploadMemberPhoto: meetupMethod({
    method: 'POST',
    path: 'members/{memberId}/photos',
    urlParams: ['memberId'],
    required: ['memberId']
  }),

  deleteMemberPhoto: meetupMethod({
    method: 'DELETE',
    path: 'members/{memberId}/photos/{photoId}',
    urlParams: ['memberId', 'photoId'],
    required: ['memberId', 'photoId']
  })
});
