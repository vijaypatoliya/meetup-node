'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var preferencesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   * domain
   * 
   * (optional)
   * 
   * page
   * offset
   * desc
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var domain = 'gdg';
  var data = {};
  try {
    var response = await meetup.preferences.getPreference(urlname, domain, data);
  } catch (error) {
    return;
  }
};

preferencesRequest();
