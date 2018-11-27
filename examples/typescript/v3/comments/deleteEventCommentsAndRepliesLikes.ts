'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

var commentsRequest = async function () {
  meetup.setApiKey(clientSecret);
  var urlname = 'GDG_Surat';
  var eventId = '256006529';
  var commentId = '496396493';
  var response = await meetup.comments.deleteEventCommentsAndRepliesLikes(urlname, eventId, commentId).catch(error => {
    if (error) {
      return;
    }
  });
};

commentsRequest();
