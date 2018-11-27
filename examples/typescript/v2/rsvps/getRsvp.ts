'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const rsvpsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const rsvpId = '1756965888';
  const response = await meetup.rsvps2.getRsvp(rsvpId).catch(error => {
    if (error) {
      return;
    }
  });
};

rsvpsRequest();
