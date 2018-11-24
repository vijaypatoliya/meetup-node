'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   */
  var urlname = 'Surat-Dining-Out-Meetup';
  try {
    var response = await meetup.groups3.ignoreRecommendedGroups(urlname);
  } catch (error) {
    return;
  }
};

groupsRequest();
