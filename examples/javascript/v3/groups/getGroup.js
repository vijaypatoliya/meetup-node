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
  var urlname = 'GDG_Surat';
  try {
    var response = await meetup.groups3.getGroup(urlname);
  } catch (error) {
    return;
  }
};

groupsRequest();
