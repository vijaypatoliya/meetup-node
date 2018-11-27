'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const membersRequest = async function () {
  meetup.setApiKey(clientSecret);
  const memberId = '266277924';
  const data = {
    city_id: 1018099, // pass city id here given id of surat // u can get cties id from /2/cities api
    add_topics: 18528 // pass topic id here given id of Foodie topic
  }
  const response = await meetup.members2.updateMember(memberId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

membersRequest();
