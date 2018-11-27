'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const groupsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    group_id: '29946762'
  };
  const response = await meetup.groups2.getGroups(data).catch(error => {
    if (error) {
      return;
    }
  });
};

groupsRequest();
