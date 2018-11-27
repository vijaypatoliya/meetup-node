'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const proRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'gdg';
  const data = {};
  const response = await meetup.pro.getProGroupsTickets(urlname, data).catch(error => {
    if (error) {
      return;
    }
  });
};

proRequest();
