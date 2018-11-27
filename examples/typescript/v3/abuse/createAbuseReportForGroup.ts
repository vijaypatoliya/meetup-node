'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const abuseRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const data = {
    type: 'graphic_photo'
  };
  const response = await meetup.abuse.createAbuseReportForGroup(urlname, data).catch(error => {
    if (error) {
      return;
    }
  });
};

abuseRequest();
