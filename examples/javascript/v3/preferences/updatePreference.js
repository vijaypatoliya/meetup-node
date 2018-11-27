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
  var data = {
    name: 'test' // preference name
  };
  try {
    var response = await meetup.preferences.updatePreference(urlname, domain, data);
  } catch (error) {
    return;
  }
};

preferencesRequest();
