'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const photosRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    event_id: 256006529,
    photo: 'file'
  };
  const response = await meetup.photos2.uploadEventPhoto(data).catch(error => {
    if (error) {
      return;
    }
  });
};

photosRequest();
