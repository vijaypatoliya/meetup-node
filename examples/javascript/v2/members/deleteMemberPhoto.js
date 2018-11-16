'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var membersRequest = async function () {
  var memberPhotoId = '282088343';
  try {
    var response = await meetup.members2.deleteMemberPhoto(memberPhotoId);
  } catch (error) {
    return;
  }
};

membersRequest();
