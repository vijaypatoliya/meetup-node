'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const groupsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const urlname = 'GDG_Surat';
  const data = {
    topic_id: 18528
  };
  const response = await meetup.groups3.removeGroupTopics(urlname, data).catch(error => {
    if (error) {
      return;
    }
  });
};

groupsRequest();
