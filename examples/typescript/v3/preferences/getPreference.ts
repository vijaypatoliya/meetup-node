'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const preferencesRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const domain = 'gdg';
  const data = {};
  const response = await meetup.preferences.getPreference(urlname, domain, data).catch(error => {
    if (error) {
      return;
    }
  });
};

preferencesRequest();
