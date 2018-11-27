'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

var categoryRequest = async function () {
  meetup.setApiKey(clientSecret);
  var data = {};
  var response = await meetup.categories.getCategories(data).catch(error => {
    if (error) {
      return;
    }
  });
};

categoryRequest();
