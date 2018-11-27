'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const profilesRequest = async function () {
  meetup.setApiKey(clientSecret);
  const groupId = '14876292';
  const memberId = '266277924';
  const data = {
    site_name: 'Patoliya Infotech'
  };
  const response = await meetup.profiles2.updateGroupProfile(groupId, memberId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

profilesRequest();
