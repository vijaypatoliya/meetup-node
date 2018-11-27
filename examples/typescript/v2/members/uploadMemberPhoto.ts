'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const membersRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    photo: 'file',
    main: false
  }
  const response = await meetup.members2.uploadMemberPhoto(data).catch(error => {
    if (error) {
      return;
    }
  });
};

membersRequest();
