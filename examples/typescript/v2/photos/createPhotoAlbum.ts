'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const membersRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    group_id: 29946762,
    title: 'New Album'
  };
  const response = await meetup.photos2.createPhotoAlbum(data).catch(error => {
    if (error) {
      return;
    }
  });
};

membersRequest();
