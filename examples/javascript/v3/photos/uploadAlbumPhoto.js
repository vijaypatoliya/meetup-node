'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * urlname
   * albumId
   * photo
   * 
   * (optional)
   * 
   * await
   * caption
   * fields
   */
  var urlname = 'GDG_Surat';
  var albumId = 29435816;
  var data = {
    photo: 'file'
  }
  try {
    var response = await meetup.photos3.uploadAlbumPhoto(urlname, albumId, data);
  } catch (error) {
    return;
  }
};

photosRequest();
