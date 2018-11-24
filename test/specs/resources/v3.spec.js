var config = require('../../intialize/config');
var { clientSecret } = config;

var chai = require('chai');
var expect = chai.expect;

var meetup = require('../../../lib')(clientSecret);

describe('AbuseRreportGroup', function () {

  it('It should create abuse report for group ', async function () {
    var urlname = 'GDG_Surat';
    var data = {
      type: 'graphic_photo'
    };
    try {
      var response = await meetup.abuse.createAbuseReportForGroup(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('AbuseRreportMember', function () {

  it('It should create abuse report for member ', async function () {
    var data = {
      type: 'other',
      member_id: 266277924,
      comments: ''
    };
    try {
      var response = await meetup.abuse.createAbuseReportForMember(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return error;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('BlockStatus', function () {

  it('It should get block status for member ', async function () {
    var memberId = 266277924;
    try {
      var response = await meetup.abuse.getBlockStatus(memberId).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('blockMember', function () {

  it('It should block member ', async function () {
    var memberId = 266277924;
    var data = {
      comments: '',
      report: 'inappropriate_photo'
    }
    try {
      var response = await meetup.abuse.blockMember(memberId).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('unblockMember', function () {

  it('It should unblock member ', async function () {
    var memberId = 266277924;
    try {
      var response = await meetup.abuse.unblockMember(memberId).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CallBatchRequest', function () {

  it('It should call multiple requests ', async function () {
    var data = {};
    try {
      var response = await meetup.batch.callBatchRequest(data).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'authentication_error') { // Must be authenticated using oauth
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupDiscussionBoardsList', function () {

  it('It should get list of group discussion boards ', async function () {
    var urlname = 'GDG_Surat';
    try {
      var response = await meetup.boards.getGroupDiscussionBoardsList(urlname).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupDiscussionsList', function () {

  it('It should get list of group discussions ', async function () {
    var urlname = 'GDG_Surat';
    var bid = 31616727; // boardId
    try {
      var response = await meetup.boards.getGroupDiscussionsList(urlname, bid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupDiscussionPostsList', function () {

  it('It should get list of group discussion posts ', async function () {
    var urlname = 'GDG_Surat';
    var bid = 31616727; // boardId
    var did = 51856651; // discussionId
    try {
      var response = await meetup.boards.getGroupDiscussionPostsList(urlname, bid, did).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('EventCommentsAndRepliesList', function () {

  it('It should get list of meetup event comments and replies ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
      var response = await meetup.comments.getEventCommentsAndRepliesList(urlname, eventId).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('addEventCommentsOrReplies', function () {

  it('It should add meetup event comments or replies ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
      comment: 'Thanks.',
      // in_reply_to: 496397505,
      notifications: false
    }
    try {
      var response = await meetup.comments.addEventCommentsOrReplies(urlname, eventId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('deleteEventCommentsOrReplies', function () {

  it('It should delete meetup event comments or replies ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var commentId = 496598690;
    try {
      var response = await meetup.comments.deleteEventCommentsOrReplies(urlname, eventId, commentId).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'comment_id_error') { // Invalid comment_id
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('EventCommentsAndRepliesLikes', function () {

  it('It should get meetup event comments or replies likes ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var commentId = 496487389;
    try {
      var response = await meetup.comments.getEventCommentsAndRepliesLikes(urlname, eventId, commentId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'comment_id_error') { // Invalid comment_id
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('AddEventCommentsAndRepliesLikes', function () {

  it('It should add meetup event comments or replies likes ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var commentId = 496596752;
    try {
      var response = await meetup.comments.addEventCommentsAndRepliesLikes(urlname, eventId, commentId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'comment_id_error') { // Invalid comment_id
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeleteEventCommentsAndRepliesLikes', function () {

  it('It should delete meetup event comments or replies likes ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var commentId = 495992566;
    try {
      var response = await meetup.comments.deleteEventCommentsAndRepliesLikes(urlname, eventId, commentId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'comment_id_error') { // Invalid comment_id
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('EventsList', function () {

  it('It should get meetup events list ', async function () {
    var urlname = 'GDG_Surat';
    try {
      var response = await meetup.events3.getEventsList(urlname).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CreatEvent', function () {

  it('It should creat meetup event ', async function () {
    var urlname = 'GDG_Surat';
    var data = {
      'description': "<p>Pleased to announce our next meetup with a wonderful venue in the heart of the Surat city. We have gone far and wide this time with Einstein and wave analytics!</p>",
      'duration': 7200000,
      'group_id': 19946960,
      'group_urlname': 'Surat-Salesforce-Developer-Group',
      'guest_limit': 100,
      'hosts': 266277924,
      'how_to_find_us': '',
      'name': 'November meetup',
      'publish_status': 'published',
      // 'question_{index}': '',
      'rsvp_close': 1,
      'rsvp_limit': 40,
      // 'rsvp_open': ,
      'simple_html_description': "<p>Pleased to announce our next meetup with a wonderful venue in the heart of the Surat city. We have gone far and wide this time with Einstein and wave analytics!</p>",
      'time': 1542454200000,
      'venue_id': 25956433,
      'venue_visibility': 'public',
      'why': 'meetup for knowledge'

    };
    try {
      var response = await meetup.events3.creatEvent(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'member_error') { // Not authorized to create or edit events in this group
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CloseEventRsvps', function () {

  it('It should close meetup event rsvps ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
      var response = await meetup.events3.closeEventRsvps(urlname, eventId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'member_error') { // Not authorized to create or edit events in this group
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('OpenEventRsvps', function () {

  it('It should open meetup event rsvps ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
      var response = await meetup.events3.openEventRsvps(urlname, eventId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'member_error') { // Not authorized to create or edit events in this group
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('EventData', function () {

  it('It should get one meetup event data ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
      var response = await meetup.events3.getEventData(urlname, eventId).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('updateEvent', function () {

  it('It should update one meetup event ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
      'guest_limit': 100
    };
    try {
      var response = await meetup.events3.updateEvent(urlname, eventId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'authentication_error') { // Authenticated member required for update event
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeleteEvent', function () {

  it('It should delete one meetup event ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
      var response = await meetup.events3.deleteEvent(urlname, eventId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'authorization_error') { // authorized person can delete event
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('EventAttendanceRecords', function () {

  it('It should get meetup event attendence record list ', async function () {
    var urlname = 'GDG_Surat'; // 'Surat-Internet-Technology-Meetup';
    var eventId = 256006529; // 256062408;
    try {
      var response = await meetup.events3.getEventAttendanceRecords(urlname, eventId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'event_time_error') { // if event not done or gone then comes this error
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('AddEventAttendanceRecords', function () {

  it('It should add meetup event attendence ', async function () {
    var urlname = 'Surat-Salesforce-Developer-Group';
    var eventId = 255965459;
    var data = {
      member: 266277924,
      status: 'absent'
    }
    try {
      var response = await meetup.events3.addEventAttendance(urlname, eventId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'event_time_error' || error[0].code == 'authorization_error') { // if event not started then comes this error || you are not authorized to take attendance
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('AddEventPayment', function () {

  it('It should add meetup event payments ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
      member: 266277924,
      amount: 100
    }
    try {
      var response = await meetup.events3.addEventPayment(urlname, eventId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'authorization_error' || error[0].code == 'event_time_error') { // This member is not authorized to enter payments || if event not started then comes this error
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUpcomingEvents', function () {

  it('It should get meetup upcoming event list ', async function () {
    var data = {}
    try {
      var response = await meetup.events3.getUpcomingEvents(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetSelfCalenderSavedUpcomingEvents', function () {

  it('It should get self calender saved upcoming event list ', async function () {
    var data = {}
    try {
      var response = await meetup.events3.getSelfCalenderSavedUpcomingEvents(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetSelfScheduledEvents', function () {

  it('It should get self scheduled event list ', async function () {
    var data = {}
    try {
      var response = await meetup.events3.getSelfScheduledEvents(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('FindLocations', function () {

  it('It should get locations list ', async function () {
    var data = {}
    try {
      var response = await meetup.geo.getLocations(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('OneGroup', function () {

  it('It should get one group ', async function () {
    var urlname = 'GDG_Surat';
    try {
      var response = await meetup.groups3.getGroup(urlname).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error') { // Invalid group urlname
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdateGroups', function () {

  it('It should update group ', async function () {
    var urlname = 'GDG_Surat';
    var data = {
      add_topics: 18528
    };
    try {
      var response = await meetup.groups3.updateGroup(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error' || error[0].code == 'authorization_error') { // Invalid group urlname || This member is not authorized to edit group settings
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('SimilarGroups', function () {

  it('It should get similar groups ', async function () {
    var urlname = 'GDG_Surat';
    try {
      var response = await meetup.groups3.getSimilarGroups(urlname).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error') { // Invalid group urlname
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('AddGroupTopics', function () {

  it('It should add groups topics ', async function () {
    var urlname = 'GDG_Surat';
    var data = {
      topic_id: 18528
    };
    try {
      var response = await meetup.groups3.addGroupTopics(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error' || error[0].code == 'authorization_error') { // Invalid group urlname || This member is not authorized to edit group settings
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('RemoveGroupTopics', function () {

  it('It should remove groups topics ', async function () {
    var urlname = 'GDG_Surat';
    var data = {
      topic_id: 18528
    };
    try {
      var response = await meetup.groups3.removeGroupTopics(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error' || error[0].code == 'authorization_error') { // Invalid group urlname || This member is not authorized to edit group settings
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('Groups', function () {

  it('It should get groups ', async function () {
    var data = {};
    try {
      var response = await meetup.groups3.getGroups(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('RecommendedGroups', function () {

  it('It should get recommended groups ', async function () {
    var data = {};
  try {
    var response = await meetup.groups3.getRecommendedGroups(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('IgnoreRecommendedGroups', function () {

  it('It should ignore recommended groups ', async function () {
    var urlname = 'Surat-Pet-Meetup';
    try {
      var response = await meetup.groups3.ignoreRecommendedGroups(urlname).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('SelfGroups', function () {

  it('It should get self groups ', async function () {
    try {
      var response = await meetup.groups3.getSelfGroups().catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('HostsForEvent', function () {

  it('It should get event\'s host list ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {};
    try {
      var response = await meetup.hosts.getHostsForEvent(urlname, eventId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('MemberRecentEvents', function () {

  it('It should get recent events list ', async function () {
    var memberId = 256006529;
    var data = {};
    try {
      var response = await meetup.members3.getMemberRecentEvents(memberId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'authorization_error') { // Invalid authorization. This service is limited to Meetup\'s internal use
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('APIStatus', function () {

  it('It should check API status ', async function () {
    var data = {};
  try {
    var response = await meetup.meta.getAPIStatus(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('Notifications', function () {

  it('It should get notifications ', async function () {
    var data = {};
  try {
    var response = await meetup.notifications.getNotifications(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('MarkAsClickedNotifications', function () {

  it('It should mark click notifications ', async function () {
    var data = {
      notif_id: 646650003821502464
    };
    try {
      var response = await meetup.notifications.markAsClickedNotifications(data).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'notif_id_error' || error[0].code == 'not_found') { // notif_id is required || notification was not found
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('MarkAsReadNotifications', function () {

  it('It should mark read notifications ', async function () {
    var data = {
      since_id: 646650003821502464
    };
    try {
      var response = await meetup.notifications.markAsReadNotifications(data).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'since_id_error') { // since_id is required
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('EventPhotos', function () {

  it('It should get event photos ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
      var response = await meetup.photos3.getEventPhotos(urlname, eventId).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UploadEventPhotos', function () {

  it('It should upload event photos ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
      photo: 'file'
    };
    try {
      var response = await meetup.photos3.uploadEventPhoto(urlname, eventId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'authentication_error') { // Authenticated member required
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('EventPhotoInfo', function () {

  it('It should get event photo info ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var data = {};
    try {
      var response = await meetup.photos3.getEventPhotoInfo(urlname, eventId, photoId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('updateEventPhotoInfo', function () {

  it('It should update event photo info ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var data = {
      caption: ''
    };
    try {
      var response = await meetup.photos3.updateEventPhotoInfo(urlname, eventId, photoId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'scope_error') { // Insufficient oauth scope
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('deleteEventPhoto', function () {

  it('It should delete event photo ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    try {
      var response = await meetup.photos3.deleteEventPhoto(urlname, eventId, photoId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'authorization_error') { // Not authorized to delete this photo
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('PhotoComments', function () {

  it('It should get photo commnets ', async function () {
    var urlname = 'GDG_Surat';
  var eventId = 256006529;
  var photoId = 476282729;
  var data = {};
  try {
    var response = await meetup.photos3.getPhotoComments(urlname, eventId, photoId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('AddPhotoComment', function () {

  it('It should add or create photo commnet ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var data = {
      comment: 'Good'
    };
    try {
      var response = await meetup.photos3.createPhotoComment(urlname, eventId, photoId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeletePhotoComment', function () {

  it('It should delete photo commnet ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var commentId = 55509708;
    try {
      var response = await meetup.photos3.deletePhotoComment(urlname, eventId, photoId, commentId).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('PhotoAlbumList', function () {

  it('It should get photo album list ', async function () {
    var urlname = 'GDG_Surat';
    var data = {};
    try {
      var response = await meetup.photos3.getPhotoAlbumList(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('PhotoAlbumInfo', function () {

  it('It should get one photo album info ', async function () {
    var urlname = 'GDG_Surat';
    var albumId = 29435816;
    try {
      var response = await meetup.photos3.getPhotoAlbumInfo(urlname, albumId).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'album_id_error') { // Invalid albumId
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('PhotosOfAlbum', function () {

  it('It should get lists photos for album ', async function () {
    var urlname = 'GDG_Surat';
    var albumId = 29435816;
    try {
      var response = await meetup.photos3.getPhotosOfAlbum(urlname, albumId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'album_id_error') { // Invalid albumId
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UploadAlbumPhoto', function () {

  it('It should upload album photo ', async function () {
    var urlname = 'GDG_Surat';
    var albumId = 29435816;
    var data = {
      photo: 'file'
    }
    try {
      var response = await meetup.photos3.uploadAlbumPhoto(urlname, albumId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'authentication_error') { // Authenticated member required
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('AllAlbumPhotos', function () {

  it('It should get all album photos ', async function () {
    var urlname = 'GDG_Surat';
    var data = {};
    try {
      var response = await meetup.photos3.getAllAlbumPhotos(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UploadMemberPhoto', function () {

  it('It should upload member photo ', async function () {
    var memberId = 256006529;
    var data = {
      photo: 'file',
      main: false
    };
    try {
      var response = await meetup.photos3.uploadMemberPhoto(memberId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if(error[0].code == 'scope_error') { // Insufficient oauth scope
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeleteMemberPhoto', function () {

  it('It should delete member photo ', async function () {
    var memberId = '266277924';
    var photoId = '282535411';
    try {
      var response = await meetup.photos3.deleteMemberPhoto(memberId, photoId).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'photo_id_error') { // photo was previously deleted
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('PreferenceAndPermission', function () {

  it('It should get preference and permission ', async function () {
    var urlname = 'GDG_Surat';
    var domain = 'gdg';
    var data = {};
    try {
      var response = await meetup.preferences.getPreference(urlname, domain, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error' || error[0].code == 'domain_error') { // Invalid group urlname || UnsupportedDomain
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdatePreference', function () {

  it('It should update preference ', async function () {
    var urlname = 'GDG_Surat';
    var domain = 'gdg';
    try {
      var response = await meetup.preferences.updatePreference(urlname, domain).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error' || error[0].code == 'domain_error' || error[0].code == 'authentication_error') { // Invalid group urlname || UnsupportedDomain || Authenticated member required
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('ProGroups', function () {

  it('It should get pro groups ', async function () {
    var urlname = 'gdg'; 
    var data = {};
    try {
      var response = await meetup.pro.getProGroups(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'pro_error' || error[0].code == 'pro_admin_error') { // Invalid Meetup Pro urlname || Valid Meetup Pro admin access is required. Contact Pro Support.
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('ProGroupsMembers', function () {

  it('It should get pro groups members ', async function () {
    var urlname = 'gdg'; 
    var data = {};
    try {
      var response = await meetup.pro.getProGroupsMembers(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'pro_error' || error[0].code == 'pro_admin_error') { // Invalid Meetup Pro urlname || Valid Meetup Pro admin access is required. Contact Pro Support.
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('ProGroupsTickets', function () {

  it('It should get pro groups tickets ', async function () {
    var urlname = 'gdg';
    var data = {};
    try {
      var response = await meetup.pro.getProGroupsTickets(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'pro_error' || error[0].code == 'pro_admin_error') { // Invalid Meetup Pro urlname || Valid Meetup Pro admin access is required. Contact Pro Support.
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('ApproveMembershipRequests', function () {

  it('It should approve membership requests ', async function () {
    var urlname = 'GDG_Surat';
    var data = {};
    try {
      var response = await meetup.profiles3.approveMembershipRequests(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'authorization_error') { // you do not organize this Meetup
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeleteMembershipRequests', function () {

  it('It should delete membership requests ', async function () {
    var urlname = 'Surat-Professional-Development-Meetup';
    var data = {};
    try {
      var response = await meetup.profiles3.deleteMembershipRequests(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'authorization_error') { // you do not organize this Meetup
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupProfileList', function () {

  it('It should get group profile list ', async function () {
    var urlname = 'GDG_Surat';
    var data = {
      page: 3
    };
    try {
      var response = await meetup.profiles3.getGroupProfileList(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error') { // Invalid group urlname
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('JoinGroup', function () {

  it('It should join member in a group ', async function () {
    var urlname = 'DigitalOceanSurat';
    try {
      var response = await meetup.profiles3.joinGroup(urlname).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error') { // Invalid group urlname
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupMemberProfile', function () {

  it('It should get group member profile ', async function () {
    var urlname = 'GDG_Surat';
    var memberId = 266277924;
    var data = {};
    try {
      var response = await meetup.profiles3.getGroupMemberProfile(urlname, memberId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'member_id_error') { // Invalid member
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdateGroupMemberProfile', function () {

  it('It should update group member profile ', async function () {
    var urlname = 'GDG_Surat';
    var memberId = 266277924;
    var data = {
      remove_role: 'coorganizer'
    };
    try {
      var response = await meetup.profiles3.updateGroupMemberProfile(urlname, memberId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'scope_error') { // Insufficient oauth scope
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeleteORLeaveGroupMember', function () {

  it('It should leave group or delete group member profile ', async function () {
    var urlname = 'DigitalOceanSurat';
    var memberId = 266277924;
    var data = {};
    try {
      var response = await meetup.profiles3.deleteOrLeaveGroupMemberProfile(urlname, memberId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'member_error') { // Invalid member if user already leave or not a member of this group
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('FindGroupMemberProfileByName', function () {

  it('It should find group member profile by name ', async function () {
    var urlname = 'GDG_Surat';
    var data = {
      query: 'pat',
      page: 5
    };
    try {
      var response = await meetup.profiles3.findGroupMemberProfileByName(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error') { // Invalid group urlname
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetMemberProfileById', function () {

  it('It should get member profile by id ', async function () {
    var memberId = 266277924;
    var data = {};
    try {
      var response = await meetup.profiles3.getMemberProfileById(memberId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'notfound_error') { // Member not found
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdateMemberProfileById', function () {

  it('It should update member profile by id ', async function () {
    var memberId = 266277924;
    var data = {
      gender: 'male'
    };
    try {
      var response = await meetup.profiles3.updateMemberProfileById(memberId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'scope_error') { // Insufficient oauth scope
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetEventRsvpList', function () {

  it('It should get event rspvs list ', async function () {
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {};
    try {
      var response = await meetup.rsvps3.getEventRsvpList(urlname, eventId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error' || error[0].code == 'event_error') { // Invalid group urlname ||  Invalid event
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CreateOrUpdateEventRsvp', function () {

  it('It should create or update event rspvs ', async function () {
    var urlname = 'Surat-Professional-Development-Meetup';
    var eventId = 'glcvcqyxpbbc';
    var data = {
      response: 'no'
    };
    try {
      var response = await meetup.rsvps3.createOrUpdateEventRsvp(urlname, eventId, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error' || error[0].code == 'event_error' || error[0].code == 'event_past_error' || error[0].code == 'member_error' ) { // Invalid group urlname ||  Invalid event || This event has already passed || Invalid member
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('FindTopicCategories', function () {

  it('It should find topic categories ', async function () {
    var data = {};
  try {
    var response = await meetup.topics3.findTopicCategories( data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('FindTopicsByName', function () {

  it('It should find topics by name ', async function () {
    var data = {
      query: 'food'
    };
    try {
      var response = await meetup.topics3.findTopicsByName(data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'query_error') { // query parameter is required
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('RecommendGroupTopics', function () {

  it('It should get recommend group topics ', async function () {
    var data = {
      text: 'food'
    };
    try {
      var response = await meetup.topics3.getRecommendGroupTopics( data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'text_or_other_topics_error') { // At least one of text or other_topics are required.
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupPreviousVenus', function () {

  it('It should get group previously venues ', async function () {
    var urlname = 'GDG_Surat';
    var data = {};
    try {
      var response = await meetup.venues3.getGroupPreviousVenus(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'group_error') { // Invalid group urlname
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('createMeetupVenue', function () {

  it('It should create meetup venue ', async function () {
    var urlname = 'GDG_Surat';
    var data = {
      address_1: 'Opp. Police Station, Varachha Main Rd, Kapodra Patiya, Surat, Gujarat 395006 · Surat',
      city: 'surat',
      country: 'IN',
      state: 'GJ',
      name: 'main uniq name' // 25997988 // 25997986
    };
    try {
      var response = await meetup.venues3.createMeetupVenue(urlname, data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'address_1_error') { // Invalid
            return error[0];
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('findVenuesByLocation', function () {

  it('It should find venue by location ', async function () {
    var data = {
      text: 'surat' // food
    };
    try {
      var response = await meetup.venues3.findVenuesByLocation(data).catch(error => {
        if (error) {
          console.log('error ', error);
          if (error[0].code == 'text_error') { // text is required
            return error;
          }
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('getRecommendedVenues', function () {

  it('It should find venue by location ', async function () {
    var data = {};
    try {
      var response = await meetup.venues3.getRecommendedVenues(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('array');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});