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
   * comment
   * 
   * (optional)
   * in_reply_to (If posting a reply, pass commentId which have to give replay)
   * notifications (notifications must be true, false, 1 or 0)
   */
  var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var data = {
    comment: 'I am excited.',
    in_reply_to: 495992566,
    notifications: false
  }
  try {
    var response = await meetup.comments.addEventCommentsOrReplies(urlname, eventId, data);
  } catch (error) {
    return;
  }
};

commentsRequest();
