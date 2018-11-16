'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var membersRequest = async function () {
  var memberId = 266277924;
  try {
    var response = await meetup.members2.getMember(memberId);
  } catch (error) {
    return;
  }
};

membersRequest();
