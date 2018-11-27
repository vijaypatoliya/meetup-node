'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const membersRequest = async function () {
  meetup.setApiKey(clientSecret);
  const memberId = '256006529';
  const data = {};
  const response = await meetup.members3.getMemberRecentEvents(memberId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

membersRequest();
