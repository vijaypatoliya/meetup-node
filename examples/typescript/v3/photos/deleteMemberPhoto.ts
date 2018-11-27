'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const photosRequest = async function () {
  meetup.setApiKey(clientSecret);
  const memberId = '266277924';
  const photoId = '282535233';
  const response = await meetup.photos3.deleteMemberPhoto(memberId, photoId).catch(error => {
    if (error) {
      return;
    }
  });
};

photosRequest();
