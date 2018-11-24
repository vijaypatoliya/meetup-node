'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * memberId
   * photoId
   */
  var memberId = '266277924';
  var photoId = '282535233';
  try {
    var response = await meetup.photos3.deleteMemberPhoto(memberId, photoId);
  } catch (error) {
    return;
  }
};

photosRequest();
