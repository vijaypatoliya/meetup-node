'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const profilesRequest = async function () {
  meetup.setApiKey(clientSecret);
  const memberId = '266277924';
  const data = {
    gender: 'male'
  };
  const response = await meetup.profiles3.updateMemberProfileById(memberId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

profilesRequest();
