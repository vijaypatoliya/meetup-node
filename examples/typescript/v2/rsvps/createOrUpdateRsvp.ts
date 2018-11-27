'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const rsvpsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    event_id: 256006529,
    rsvp: 'no'
  };
  const response = await meetup.rsvps2.createOrUpdateRsvp(data).catch(error => {
    if (error) {
      return;
    }
  });
};

rsvpsRequest();
