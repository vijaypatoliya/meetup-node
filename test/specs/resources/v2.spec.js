var config = require('../../intialize/config');
var { clientSecret } = config;

var chai = require('chai');
var expect = chai.expect;

var meetup = require('../../../lib')(clientSecret);

describe('Categories', function () {

  it('It should get Categories list ', async function () {
    var data = {};
    try {
      var response = await meetup.categories.getCategories(data).catch(error => {
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

describe('Cities', function () {

  it('It should get Cities list ', async function () {
    var data = {
      country: 'us'
    };
    try {
      var response = await meetup.cities.getCities(data).catch(error => {
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

describe('Dashboard', function () {

  it('It should get Dashboard ', async function () {
    var data = {};
    try {
      var response = await meetup.dashboard.getDashboard(data).catch(error => {
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

describe('Concierge', function () {

  it('It should get Concierge ', async function () {
    var data = {};
    try {
      var response = await meetup.events2.getConcierge(data).catch(error => {
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

describe('CreateEvent', function () {

  it('It should creat Event ', async function () {
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
      'rsvp_close': 1,
      'rsvp_limit': 40,
      'simple_html_description': "<p>Pleased to announce our next meetup with a wonderful venue in the heart of the Surat city. We have gone far and wide this time with Einstein and wave analytics!</p>",
      'time': 1542454200000,
      'venue_id': 25956433,
      'venue_visibility': 'public',
      'why': 'meetup for knowledge'

    };
    try {
      var response = await meetup.events2.createEvent(data).catch(error => {
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

describe('UpdateEvent', function () {

  it('It should update Event ', async function () {
    var data = {
      'guest_limit': 100,
    };
    var eventId = 256006529;
    try {
      var response = await meetup.events2.updateEvent(eventId, data).catch(error => {
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

describe('DeleteEvent', function () {

  it('It should delete Event', async function () {
    var eventId = 256006529;
    try {
      var response = await meetup.events2.deleteEvent(eventId).catch(error => {
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

describe('Events', function () {

  it('It should get Events ', async function () {
    var data = {
      group_id: 29946762
    };
    try {
      var response = await meetup.events2.getEvents(data).catch(error => {
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

describe('CreateEventComment', function () {

  it('It should creat Event Comment', async function () {
    var data = {
      'comment': 'I am excited.',
      'event_id': 256006529,
      // 'in_reply_to': 495992566,
      'notifications': 'off'
    };
    try {
      var response = await meetup.events2.createEventComment(data).catch(error => {
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

describe('EventComment', function () {

  it('It should get Event Comment', async function () {
    var eventCommentId = 496313388;
    try {
      var response = await meetup.events2.getEventComment(eventCommentId).catch(error => {
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

describe('deleteEventComment', function () {

  it('It should delete Event Comment', async function () {
    var eventCommentId = 496313388;
    try {
      var response = await meetup.events2.deleteEventComment(eventCommentId).catch(error => {
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

describe('CreateEventCommentFlag', function () {

  it('It should create Event Comment Flag', async function () {
    var data = {
      'comment_id': -259344566,
      'reason': 'inappropriate'
    };
    try {
      var response = await meetup.events2.createEventCommentFlag(data).catch(error => {
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

describe('AddEventCommentLike', function () {

  it('It should add Event Comment Like', async function () {
    var eventCommentId = -259344566;
    try {
      var response = await meetup.events2.addEventCommentLike(eventCommentId).catch(error => {
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

describe('DeleteEventCommentLike', function () {

  it('It should delete Event Comment Like', async function () {
    var eventCommentId = -259344566;
    try {
      var response = await meetup.events2.deleteEventCommentLike(eventCommentId).catch(error => {
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

describe('EventCommentLikes', function () {

  it('It should get Event Comment Likes', async function () {
    var data = {
      comment_id: -259344566
    };
    try {
      var response = await meetup.events2.getEventCommentLikes(data).catch(error => {
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

describe('EventCommentSubscribe', function () {

  it('It should add Event Comment Subscribe', async function () {
    var eventCommentId = 495992566;
    try {
      var response = await meetup.events2.addEventCommentSubscribe(eventCommentId).catch(error => {
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

describe('EventCommentUnSubscribe', function () {

  it('It should delete Event Comment Subscribe', async function () {
    var eventCommentId = 495992566;
    try {
      var response = await meetup.events2.deleteEventCommentSubscribe(eventCommentId).catch(error => {
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

describe('EventComments', function () {

  it('It should get Event Comments', async function () {
    /** alteast one required */
    var data = {
      // comment_id: 495992566,
      // member_id: 266277924,
      // group_id: 29946762,
      event_id: 256006529
    };
    try {
      var response = await meetup.events2.getEventComments(data).catch(error => {
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

describe('AddEventRating', function () {

  it('It should add Event Rating', async function () {
    var data = {
      event_id: 256062408,
      rating: 3
    };
    try {
      var response = await meetup.events2.addEventRating(data).catch(error => {
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

describe('EventRatings', function () {

  it('It should get Event Ratings', async function () {
    var data = {
      event_id: 256006529
    };
    try {
      var response = await meetup.events2.getEventRatings(data).catch(error => {
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

describe('OpenEvents', function () {

  it('It should get Event Ratings', async function () {
    /* var data = {
      country: 'in',
      city: 'surat'
    }; */
    var data = {
      lat: 21.210001,
      lon: 72.779976
    }
    try {
      var response = await meetup.events2.getOpenEvents(data).catch(error => {
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

describe('GroupPhoto', function () {

  it('It should upload Group Photo ', async function () {
    var data = {
      group_id: 29946762,
      photo: 'file',
      main: false
    };
    try {
      var response = await meetup.groups2.uploadGroupPhoto(data).catch(error => {
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

describe('Groups', function () {

  it('It should get Groups ', async function () {
    /**
     * (one required)
     * group_id: 29946762
     * organizer_id: 29946762
     * country: 'in', city: 'surat'
     * topic: 'webdesign'
     */
    var data = {
      group_id: 29946762
    };
    try {
      var response = await meetup.groups2.getGroups(data).catch(error => {
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

describe('OneMember', function () {

  it('It should get Member Info ', async function () {
    var member_id = 266277924;
    try {
      var response = await meetup.members2.getMember(member_id).catch(error => {
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

describe('updateMember', function () {

  it('It should update Member Info ', async function () {
    var data = {
      city_id: 1018099, // pass city id here given id of surat >> u can get cities id from /2/cities api
      add_topics: 18528 // pass topic id here given id of Foodie topic
    }
    var memberId = 266277924;
    try {
      var response = await meetup.members2.updateMember(memberId, data).catch(error => {
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

describe('MemberPhoto', function () {

  it('It should upload Member Photo ', async function () {
    var data = {
      photo: 'file',
      main: false
    };
    try {
      var response = await meetup.members2.uploadMemberPhoto(data).catch(error => {
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

describe('DeleteMemberPhoto', function () {

  it('It should delete Member Photo ', async function () {
    var memberPhotoId = '282088445';
    try {
      var response = await meetup.members2.deleteMemberPhoto(memberPhotoId).catch(error => {
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

describe('Members', function () {

  it('It should get Members Photo ', async function () {
    var data = {
      // group_id: 29946762,
      member_id: 266277924
    };
    try {
      var response = await meetup.members2.getMembers(data).catch(error => {
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

describe('EventPhoto', function () {

  it('It should upload Event Photo ', async function () {
    var data = {
      event_id: 256006529,
      photo: 'file'
    };
    try {
      var response = await meetup.photos2.uploadEventPhoto(data).catch(error => {
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

describe('UpdateEventPhoto', function () {

  it('It should update Event Photo ', async function () {
    var eventPhotoId = 476304349;
    var data = {
      caption: 'test image'
    };
    try {
      var response = await meetup.photos2.updateEventPhoto(eventPhotoId, data).catch(error => {
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

describe('DeleteEventPhoto', function () {

  it('It should delete Event Photo ', async function () {
    var eventPhotoId = 476304349;
    try {
      var response = await meetup.photos2.deleteEventPhoto(eventPhotoId).catch(error => {
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

describe('CreatePhotoAlbum', function () {

  it('It should create photo album ', async function () {
    var data = {
      group_id: 29946762,
      title: 'New Album'
    }
    try {
      var response = await meetup.photos2.createPhotoAlbum(data).catch(error => {
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

describe('PhotoAlbums', function () {

  it('It should get photo album ', async function () {
    var data = {
      group_id: 29946762,
      event_id: 256006529
    }
    try {
      var response = await meetup.photos2.getPhotoAlbums(data).catch(error => {
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

describe('AddPhotoComment', function () {

  it('It should add Photo Comment ', async function () {
    var data = {
      photo_id: 476282729,
      comment: 'Nice'
    };
    try {
      var response = await meetup.photos2.addPhotoComment(data).catch(error => {
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

describe('PhotoComments', function () {

  it('It should get Photo Comments ', async function () {
    var data = {
      photo_id: 476282729
    };
    try {
      var response = await meetup.photos2.getPhotoComments(data).catch(error => {
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

describe('Photos', function () {

  it('It should get Photos ', async function () {
    var data = {
      // photo_id: 476282729
      // event_id: 256006529
      group_id: 29946762
    };
    try {
      var response = await meetup.photos2.getPhotos(data).catch(error => {
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

describe('createGroupProfile', function () {

  it('It should create Group Profile means join group ', async function () {
    var data = {
      group_id: 14876292
    };
    try {
      var response = await meetup.profiles2.createGroupProfile(data).catch(error => {
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

describe('getGroupProfile', function () {

  it('It should get Group Profile ', async function () {
    var groupId = 14876292;
    var memberId = 266277924;
    try {
      var response = await meetup.profiles2.getGroupProfile(groupId, memberId).catch(error => {
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

describe('updateGroupProfile', function () {

  it('It should update Group Profile ', async function () {
    var groupId = 14876292;
    var memberId = 266277924;
    var data = {
      site_name: 'Patoliya Infotech'
    };
    try {
      var response = await meetup.profiles2.updateGroupProfile(groupId, memberId, data).catch(error => {
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

describe('deleteGroupProfile', function () {

  it('It should delete Group Profile ', async function () {
    var groupId = 14876292;
    var memberId = 266277924;
    try {
      var response = await meetup.profiles2.deleteGroupProfile(groupId, memberId).catch(error => {
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

describe('GroupProfiles', function () {

  it('It should get Group Profiles', async function () {
    var data = {
      group_id: 14876292
      // member_id: 266277924
    }
    try {
      var response = await meetup.profiles2.getGroupProfiles(data).catch(error => {
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

describe('CreateOrUpdateRsvp', function () {

  it('It should create or update rsvp', async function () {
    var data = {
      event_id: 256006529,
      rsvp: 'no'
    }
    try {
      var response = await meetup.rsvps2.createOrUpdateRsvp(data).catch(error => {
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

describe('RSVP', function () {

  it('It should get one rsvp', async function () {
    var rsvpId = 1756965888;
    try {
      var response = await meetup.rsvps2.getRsvp(rsvpId).catch(error => {
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

describe('RSVPS', function () {

  it('It should get all rsvps', async function () {
    var data = {
      event_id: 256006529
    }
    try {
      var response = await meetup.rsvps2.getRsvps(data).catch(error => {
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

describe('httpEventComments', function () {

  it('It should get http Event Comments', async function () {
    var data = {
      api_version: 2,
      event_id: 256006529,
      // callback: null
    }
    try {
      var response = await meetup.streams.getEventComments(data).catch(error => {
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

describe('OpenEvents', function () {

  it('It should get Open Events ', async function () {
    try {
      var response = await meetup.streams.getOpenEvents().catch(error => {
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

describe('OpenVenues', function () {

  it('It should get Open Venues ', async function () {
    try {
      var response = await meetup.streams.getOpenVenues().catch(error => {
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

describe('getPhotos', function () {

  it('It should get Photos ', async function () {
    var data = {
      api_version: 2,
      event_id: 256006529,
      // callback: null
    }
    try {
      var response = await meetup.streams.getPhotos(data).catch(error => {
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

describe('getRsvps', function () {

  it('It should get rsvps ', async function () {
    var data = {
      api_version: 2,
      event_id: 256006529,
      // callback: null
    }
    try {
      var response = await meetup.streams.getRsvps(data).catch(error => {
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

describe('TopicCategories', function () {

  it('It should get Topic Categories ', async function () {
    try {
      var response = await meetup.topics2.getTopicCategories().catch(error => {
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

describe('OpenVenues', function () {

  it('It should get Open Venues ', async function () {
    var data = {
      country: 'IN',
      city: 'surat'
    }
    try {
      var response = await meetup.venues2.getOpenVenues(data).catch(error => {
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

describe('Venues', function () {

  it('It should get Venues ', async function () {
    var data = {
      // group_id: 29946762
      event_id: 256006529
    };
    try {
      var response = await meetup.venues2.getVenues(data).catch(error => {
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