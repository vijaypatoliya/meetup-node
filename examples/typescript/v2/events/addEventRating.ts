'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const eventRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    event_id: 256006529,
    rating: 3
  };
  const response = await meetup.events2.addEventRating(data).catch(error => {
    if (error) {
      return;
    }
  });
};

eventRequest();
