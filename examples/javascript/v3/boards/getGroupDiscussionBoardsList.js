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
   * 
   * (optional)
   * offset
   * desc
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  try {
    var response = await meetup.boards.getGroupDiscussionBoardsList(urlname);
  } catch (error) {
    return;
  }
};

boardsRequest();
