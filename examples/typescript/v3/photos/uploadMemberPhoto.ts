'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const photosRequest = async function () {
  meetup.setApiKey(clientSecret);
  const memberId = '256006529';
  const data = {
    photo: 'file',
    main: false
  };
  const response = await meetup.photos3.uploadMemberPhoto(memberId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

photosRequest();
