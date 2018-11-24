'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var proRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   * 
   * (optional)
   * 
   * country
   * chapter_name
   * ticket_key
   * chapters
   * status
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  var urlname = 'gdg';
  var data = {};
  try {
    var response = await meetup.pro.getProGroupsTickets(urlname, data);
  } catch (error) {
    return;
  }
};

proRequest();
