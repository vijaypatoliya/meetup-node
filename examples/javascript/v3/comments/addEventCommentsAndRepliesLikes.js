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
   * commentId
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var commentId = 496396493;
  try {
    var response = await meetup.comments.addEventCommentsAndRepliesLikes(urlname, eventId, commentId);
  } catch (error) {
    return;
  }
};

commentsRequest();
