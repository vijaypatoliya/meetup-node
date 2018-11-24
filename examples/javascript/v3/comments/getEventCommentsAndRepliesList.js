'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var commentsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required)
   * urlname
   * eventId
   * 
   * (optional)
   * fields
   * page
   * only
   * omit
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  try {
    var response = await meetup.comments.getEventCommentsAndRepliesList(urlname, eventId);
  } catch (error) {
    return;
  }
};

commentsRequest();
