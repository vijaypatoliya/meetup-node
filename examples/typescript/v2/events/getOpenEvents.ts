'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const eventRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    country: 'in',
    city: 'surat'
  };
  const response = await meetup.events2.getOpenEvents(data).catch(error => {
    if (error) {
      return;
    }
  });
};

eventRequest();
