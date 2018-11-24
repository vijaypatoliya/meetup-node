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
   * 
   * (optional)
   * 
   * member
   * send_copy
   * welcome_message
   */
  var urlname = 'GDG_Surat';
  var data = {};
  try {
    var response = await meetup.profiles3.approveMembershipRequests(urlname, data);
  } catch (error) {
    return;
  }
};

profilesRequest();
