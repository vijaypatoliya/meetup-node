'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var photosRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * memberId
   * photo
   * 
   * (optional)
   * main
   * await (Optional boolean parameter that, when set to true, will defer a request's a response until confirmation that photo is immediately displayable is received.)
   * sync_photo
   */
  var memberId = 256006529;
  var data = {
    photo: 'file',
    main: false
  };
  try {
    var response = await meetup.photos3.uploadMemberPhoto(memberId, data);
  } catch (error) {
    return;
  }
};

photosRequest();
