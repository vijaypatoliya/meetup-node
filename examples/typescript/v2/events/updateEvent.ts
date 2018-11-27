'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const eventRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    'rsvp_close': 1,
    'rsvp_limit': 40,
    'why': 'meetup for knowledge'
  };
  const eventId = '256006529';
  const response = await meetup.events2.updateEvent(eventId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

eventRequest();
