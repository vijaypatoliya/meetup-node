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
   * did (discussionId)
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
  var did = 51856651;
  try {
    var response = await meetup.boards.getGroupDiscussionPostsList(urlname, bid, did);
  } catch (error) {
    return;
  }
};

boardsRequest();
