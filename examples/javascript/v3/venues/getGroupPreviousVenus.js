'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var venuesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   *
   * urlname
   * 
   * (optional)
   * 
   * fields
   * page
   * offset
   * desc
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var data = {};
  try {
    var response = await meetup.venues3.getGroupPreviousVenus(urlname, data);
  } catch (error) {
    return;
  }
};

venuesRequest();
