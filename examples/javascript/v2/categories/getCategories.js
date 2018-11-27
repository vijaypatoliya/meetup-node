'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var categoryRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var data = {};
  try {
    var response = await meetup.categories.getCategories(data);
  } catch (error) {
    return;
  }
};

categoryRequest();
