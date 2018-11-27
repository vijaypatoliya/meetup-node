'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const abuseRequest = async function () {
  meetup.setApiKey(clientSecret);
  const memberId = '266277924';
  const data = {
    comments: '',
    report: 'inappropriate_photo'
  }
  const response = await meetup.abuse.blockMember(memberId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

abuseRequest();
