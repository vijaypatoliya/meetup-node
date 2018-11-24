'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * urlname
   * 
   * (optional)
   * 
   * page
   * offset
   * fields
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var data = {};
  try {
    var response = await meetup.photos3.getPhotoAlbumList(urlname, data);
  } catch (error) {
    return;
  }
};

photosRequest();
