'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const streamsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    api_version: 2,
    event_id: 256006529,
    // callback: null
  };
  const response = await meetup.streams.getEventComments(data).catch(error => {
    if (error) {
      return;
    }
  });
};

streamsRequest();
