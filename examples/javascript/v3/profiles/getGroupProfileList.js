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
   * filter
   * role
   * page
   * fields
   * desc
   * order
   * status
   * offset
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var data = {};
  try {
    var response = await meetup.profiles3.getGroupProfileList(urlname, data);
  } catch (error) {
    return;
  }
};

profilesRequest();
