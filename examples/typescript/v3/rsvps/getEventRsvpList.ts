'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const rsvpsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const eventId = '256006529';
  const data = {};
  const response = await meetup.rsvps3.getEventRsvpList(urlname, eventId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

rsvpsRequest();
