'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var profilesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   */
  var urlname = 'GDG_Surat';
  try {
    var response = await meetup.profiles3.joinGroup(urlname);
  } catch (error) {
    return;
  }
};

profilesRequest();
