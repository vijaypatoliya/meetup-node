'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const venuesRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const data = {
    address_1: 'Opp. Police Station, Station Main Rd, Surat, Gujarat 395006 · Surat',
    city: 'surat',
    country: 'IN',
    state: 'GJ',
    name: 'main uniq name'
  };
  const response = await meetup.venues3.createMeetupVenue(urlname, data).catch(error => {
    if (error) {
      return;
    }
  });
};

venuesRequest();
