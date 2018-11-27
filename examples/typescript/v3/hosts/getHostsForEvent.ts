'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const hostsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const eventId = '256006529';
  const data = {};
  const response = await meetup.hosts.getHostsForEvent(urlname, eventId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

hostsRequest();
