'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const activityRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {};
  const response = await meetup.activity.getActivityItems(data).catch(error => {
    if (error) {
      return;
    }
  });
};

activityRequest();
