'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const boardsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const bid = '31616727';
  const response = await meetup.boards.getGroupDiscussionsList(urlname, bid).catch(error => {
    if (error) {
      return;
    }
  });
};

boardsRequest();
