'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var groupsRequest = async function () {
  try {
    var response = await meetup.groups3.getSelfGroups();
  } catch (error) {
    return;
  }
};

groupsRequest();
