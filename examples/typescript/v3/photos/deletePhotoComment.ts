'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const photosRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const eventId = '256006529';
  const photoId = '476282729';
  const commentId = '55504466';
  const response = await meetup.photos3.deletePhotoComment(urlname, eventId, photoId, commentId).catch(error => {
    if (error) {
      return;
    }
  });
};

photosRequest();
