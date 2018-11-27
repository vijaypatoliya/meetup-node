'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const topicRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    page: '20'
  };
  const response = await meetup.topic.getTopicItems(data).catch(error => {
    if (error) {
      return;
    }
  });
};

topicRequest();
