'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var boardsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required)
   * urlname
   * bid (boardId)
   * 
   * (optional)
   * offset
   * page
   * desc
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var bid = 31616727;
  try {
    var response = await meetup.boards.getGroupDiscussionsList(urlname, bid);
  } catch (error) {
    return;
  }
};

boardsRequest();
