'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const commentsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const eventId = '256006529';
  const data = {
    comment: 'I am excited.',
    in_reply_to: 495992566,
    notifications: false
  }
  const response = await meetup.comments.addEventCommentsOrReplies(urlname, eventId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

commentsRequest();
