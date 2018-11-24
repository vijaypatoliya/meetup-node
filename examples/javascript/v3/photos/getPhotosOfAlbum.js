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
   * 
   * (optional)
   * 
   * page
   * fields
   * desc
   * offset
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var albumId = 29435816;
  var data = {};
  try {
    var response = await meetup.photos3.getPhotosOfAlbum(urlname, albumId, data);
  } catch (error) {
    return;
  }
};

photosRequest();
