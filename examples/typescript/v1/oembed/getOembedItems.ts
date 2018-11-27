'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const oembedRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    url: 'http://www.meetup.com/ny-tech'
  };
  const response = await meetup.oembed.getOembedItems(data).catch(error => {
    if (error) {
      return;
    }
  });
};

oembedRequest();
