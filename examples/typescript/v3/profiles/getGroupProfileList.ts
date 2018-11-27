'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const profilesRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const data = {};
  const response = await meetup.profiles3.getGroupProfileList(urlname, data).catch(error => {
    if (error) {
      return;
    }
  });
};

profilesRequest();
