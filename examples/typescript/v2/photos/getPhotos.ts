'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const photosRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    photo_id: 476282729
  };
  const response = await meetup.photos2.getPhotos(data).catch(error => {
    if (error) {
      return;
    }
  });
};

photosRequest();
