'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const eventRequest = async function () {
  meetup.setApiKey(clientSecret);
  const eventCommentId = '495992442';
  const response = await meetup.events2.deleteEventComment(eventCommentId).catch(error => {
    if (error) {
      return;
    }
  });
};

eventRequest();
