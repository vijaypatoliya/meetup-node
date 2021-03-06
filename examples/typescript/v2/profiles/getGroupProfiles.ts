'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const profilesRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    group_id: 14876292,
    member_id: 266277924
  };
  const response = await meetup.profiles2.getGroupProfiles(data).catch(error => {
    if (error) {
      return;
    }
  });
};

profilesRequest();
