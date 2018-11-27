'use strict';

const clientSecret = process.env.MEETUP_SECRET || 'YOUR_SECRET_KEY';
import * as MeetupAPI from 'meetup-node';

const meetup = new MeetupAPI();

const notificationsRequest = async function () {
  meetup.setApiKey(clientSecret);
  const data = {
    since_id: 644482948849258496
  };
  const response = await meetup.notifications.markAsReadNotifications(data).catch(error => {
    if (error) {
      return;
    }
  });
};

notificationsRequest();
