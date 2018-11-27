'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

var eventsRequest = async function () {
  meetup.setApiKey(clientSecret);
  var urlname = 'GDG_Surat';
  var eventId = '256006529';
  var data = {
    'guest_limit': 100
  };
  var response = await meetup.events3.updateEvent(urlname, eventId, data).catch(error => {
    if (error) {
      return;
    }
  });
};

eventsRequest();
