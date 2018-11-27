'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var groupsRequest = async function () {
  var data = {};
  try {
    var response = await meetup.groups3.getSelfGroups(data);
  } catch (error) {
    return;
  }
};

groupsRequest();
