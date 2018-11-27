'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const abuseRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    type: 'other',
    member_id: 266277924
  };
  const response = await meetup.abuse.createAbuseReportForMember(data).catch(error => {
    if (error) {
      return;
    }
  });
};

abuseRequest();
