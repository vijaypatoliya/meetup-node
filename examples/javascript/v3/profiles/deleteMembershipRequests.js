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
   * anon
   * ban
   * explanation
   * member
   * send_copy
   */
  var urlname = 'GDG_Surat';
  var data = {};
  try {
    var response = await meetup.profiles3.deleteMembershipRequests(urlname, data);
  } catch (error) {
    return;
  }
};

profilesRequest();
