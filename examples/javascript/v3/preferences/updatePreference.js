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
   */
  var urlname = 'GDG_Surat';
  var domain = 'gdg';
  try {
    var response = await meetup.preferences.updatePreference(urlname, domain);
  } catch (error) {
    return;
  }
};

preferencesRequest();
