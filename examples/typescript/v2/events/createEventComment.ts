'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const eventRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    'comment': 'hello',
    'event_id': 256006529,
    'in_reply_to': 495992566,
    'notifications': 'off'
  };
  const response = await meetup.events2.createEventComment(data).catch(error => {
    if (error) {
      return;
    }
  });
};

eventRequest();
