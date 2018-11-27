'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const photosRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const albumId = '29435816';
  const data = {
    photo: 'file'
  }
  const response = await meetup.photos3.uploadAlbumPhoto(urlname, albumId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

photosRequest();
