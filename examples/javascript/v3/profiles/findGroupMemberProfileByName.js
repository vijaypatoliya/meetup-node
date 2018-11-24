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
   * query (The name to search for)
   * 
   * (optional)
   * 
   * page
   * fields
   * order
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var data = {
    query: 'pat'
  };
  try {
    var response = await meetup.profiles3.findGroupMemberProfileByName(urlname, data);
  } catch (error) {
    return;
  }
};

profilesRequest();
