'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const photosRequest = async function () {
  meetup.setApiKey(clientSecret);
  const eventPhotoId = '476304349';
  const data = {
    caption: 'New Image'
  };
  const response = await meetup.photos2.updateEventPhoto(eventPhotoId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

photosRequest();
