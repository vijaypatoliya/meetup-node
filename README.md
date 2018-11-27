# meetup-node (Meetup Node Rest API)
[![Build Status](https://travis-ci.org/vijaypatoliya/meetup-node.svg?branch=master)](https://travis-ci.org/vijaypatoliya/meetup-node) [![Stackoverflow Thread](https://img.shields.io/badge/stackoverflow-meetup--node-yellowgreen.svg)](https://stackoverflow.com/search?q=nodejs-meetup-node)

This API supported MeetUp standard REST API that accepts/returns JSON requests. Here is the [API reference] (https://www.meetup.com/meetup_api/)

You can find [examples of JavaScript and TypeScript](https://github.com/vijaypatoliya/meetup-node/tree/master/examples). This will help you for faster implementation of MeetUp APIs.

##### It does supports EcmaScript 5, EcmaScript 6,  EcmaScript 8, TypeScript, async-await, Promises, Callback!!!
##### It does also supports for AWS Lambda like serverless cloud function call.
##### It supports pure JSON response.
##### All methods support Promise and Callback both.

## Get started
Using the MeetUp API wrapper for Node.js is really simple.
Given that you already have a Node.js project with NPM setup just follow these steps:

Install the dependency
```
npm install --save meetup-node
```

## Usage
```bash
export MEETUP_SECRET=KEY
```

## Configuration Using JavaScript
```js
var meetUp = require('meetup-node')('YOUR_KEY');
```

## Configuration Using TypeScript
```js
import * as MeetupAPI from 'meetup-node';
const meetup = new MeetupAPI();
meetup.setApiKey('YOUR_KEY');
```

## Test Cases
```bash
npm run test.mocha
```

## Debugging
```bash
export DEBUG=meetup:*
```

```
Originally by [Vijay Patoliya](https://github.com/vijaypatoliya) (osi.vijay@gmail.com).
```
 
## Examples

## V1

#### Activity
**Get the activity feed for a member's groups**

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
      member_id: '266277924'
    };
    try {
        var response = await meetup.activity.getActivityItems(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Topics
**Get meetup topics**

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.topic.getTopicItems(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

## V2

#### Events
**Search events by group, member, or event id**

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
        group_id: '29946762'
    };
    try {
        var response = await meetup.events2.getEvents(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Member
**Get a single member**

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = '266277924';
    try {
        var response = await meetup.members2.getMember(memberId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Members
**Get a single member**

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = '266277924';
    try {
        var response = await meetup.members2.getMember(memberId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Profiles
**Get member profiles associated with a particular group**

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
        group_id: '14876292'
    };
    try {
        var response = await meetup.profiles2.getGroupProfiles(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Venues
**Search for Meetup venues by one of your groups, events, or venue identifiers**

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
        group_id: '29946762'
    };
    try {
        var response = await meetup.venues2.getVenues(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

## V3

#### Abuse
    Report Group
    /* Submits a new abuse report for a target group */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {
        type: 'graphic_photo'
    };
    try {
        var response = await meetup.abuse.createAbuseReportForGroup(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Report Member
    /* Submits a new abuse report for a target member */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
    type: 'other',
    member_id: 266277924
    };
    try {
        var response = await meetup.abuse.createAbuseReportForMember(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Block Status
    /* Checks the block status for a target member */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = '266277924';
    try {
        var response = await meetup.abuse.getBlockStatus(memberId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Block Member
    /* Blocks a target member */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = '266277924';
    var data = {
        comments: '',
        report: 'inappropriate_photo'
    }
    try {
        var response = await meetup.abuse.blockMember(memberId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Unblock Member
    /* Unblock a target member */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = '266277924';
    try {
        var response = await meetup.abuse.unblockMember(memberId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Boards
    Discussion Boards
    /* Listings of Group discussion boards */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    try {
        var response = await meetup.boards.getGroupDiscussionBoardsList(urlname);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Discussions
    /* Listings of Group discussions */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var bid = '31616727';
    try {
        var response = await meetup.boards.getGroupDiscussionsList(urlname, bid);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Discussion Posts
    /* Listing Group discussion posts */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var bid = '31616727';
    var did = '51856651';
    try {
        var response = await meetup.boards.getGroupDiscussionPostsList(urlname, bid, did);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Comments
    Get event Comments List
    /* Lists the comments and replies posted in a given Meetup event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = '256006529';
    try {
        var response = await meetup.comments.getEventCommentsAndRepliesList(urlname, eventId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Add event comment and reply
    /* Creates new comments and replies to existing comments within an Meetup event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = '256006529';
    var data = {
        comment: 'I am excited.',
        in_reply_to: 495992566,
        notifications: false
    }
    try {
        var response = await meetup.comments.addEventCommentsOrReplies(urlname, eventId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Delete event comment
    /* Deletes comments posted in events */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = '256006529';
    var commentId = '496396493';
    try {
        var response = await meetup.comments.deleteEventCommentsOrReplies(urlname, eventId, commentId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get event Comment and Reply Likes
    /* Lists the comments and replies posted in a given Meetup event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = '256006529';
    var commentId = '496396493';
    try {
        var response = await meetup.comments.getEventCommentsAndRepliesLikes(urlname, eventId, commentId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Add event Comment Like
    /* Like a given event comment */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = '256006529';
    var commentId = '496396493';
    try {
        var response = await meetup.comments.addEventCommentsAndRepliesLikes(urlname, eventId, commentId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Event Comment Unlike
    /* Unlike a given event comment */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = '256006529';
    var commentId = '496396493';
    try {
        var response = await meetup.comments.deleteEventCommentsAndRepliesLikes(urlname, eventId, commentId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Events
    Get Group Events
    /* Gets a listing of all Meetup Events hosted by a target group */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    try {
        var response = await meetup.events3.getEventsList(urlname);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Create Event
    /* Creates a new Meetup group event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
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
        'rsvp_close': 1,
        'rsvp_limit': 40,
        'simple_html_description': "<p>Pleased to announce our next meetup with a wonderful venue in the heart of the Surat city. We have gone far and wide this time with Einstein and wave analytics!</p>",
        'time': 1542454200000,
        'venue_id': 25956433,
        'venue_visibility': 'public',
        'why': 'meetup for knowledge'
    };
    try {
        var response = await meetup.events3.creatEvent(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Close Rsvps
    /* Closes rsvps for an event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
        var response = await meetup.events3.closeEventRsvps(urlname, eventId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Open Rsvps
    /* Opens rsvps for an event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
        var response = await meetup.events3.openEventRsvps(urlname, eventId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Event
    /* Fetches a Meetup Event by group urlname and event_id */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
        var response = await meetup.events3.getEventData(urlname, eventId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Update Event
    /* Updates an existing Meetup group event's details */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
        'guest_limit': 100
    };
    try {
        var response = await meetup.events3.updateEvent(urlname, eventId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Delete Event
    /* Cancels or removes an event from a groups calendar */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
        var response = await meetup.events3.deleteEvent(urlname, eventId);
            console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Attendance
    /* Getting the list of attendance records for private groups is limited only to members of that group */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
        var response = await meetup.events3.getEventAttendanceRecords(urlname, eventId);
            console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Attendance Taking
    /* Takes member attendance for an event. Limited for use by administrative members */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
        member: 266277924,
        status: 'absent'
    }
    try {
        var response = await meetup.events3.addEventAttendance(urlname, eventId, data);
            console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Event Payments
    /* Allows organizers of a group to note payments made by members for an event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
        member: 266277924,
        amount: 100
    }
    try {
        var response = await meetup.events3.addEventPayment(urlname, eventId, data);
            console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Find Upcoming Events
    /* Returns a list of upcoming events */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {}
    try {
        var response = await meetup.events3.getUpcomingEvents(data);
            console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Member Calendar
    /* Get a listing of all upcoming Meetup events for the authenticated member */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {}
    try {
        var response = await meetup.events3.getSelfCalenderSavedUpcomingEvents(data);
            console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Member Events
    /* Gets a listing of all scheduled Meetup Events the authenticated member has RSVP'd to that have been announced to the group */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {}
    try {
        var response = await meetup.events3.getSelfScheduledEvents(data);
            console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Geo
    Find locations
    /* Provides a query interface for finding known locations */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.geo.getLocations(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Groups
    Get Groups
    /* Fetches a Meetup group by urlname */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    try {
        var response = await meetup.groups3.getGroup(urlname);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    udpate Groups
    /* edit their Meetup group information */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {
        add_topics: 18528
    };
    try {
        var response = await meetup.groups3.updateGroup(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Similar groups
    /* Get list of similar groups */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    try {
        var response = await meetup.groups3.getSimilarGroups(urlname);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Add Group Topics
    /* Associates topics with a given Meetup group  */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {
        topic_id: 18528
    };
    try {
        var response = await meetup.groups3.addGroupTopics(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Remove Group Topics
    /* Disassociates topics with a given Meetup group  */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {
        topic_id: 18528
    };
    try {
        var response = await meetup.groups3.removeGroupTopics(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Find Groups
    /* Text, location, category and friend-based group searches  */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.groups3.getGroups(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Recommended Groups
    /* Returns groups Meetup finds relevant to you  */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.groups3.getRecommendedGroups(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Ignore Recommended Groups
    /* Provides a form of feedback by requesting to remove a group from future recommendations  */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'Surat-Dining-Out-Meetup';
    try {
        var response = await meetup.groups3.ignoreRecommendedGroups(urlname);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Member groups
    /* ists the authenticated member's groups  */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.groups3.getSelfGroups(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Hosts
    Event Hosts
    /* Returns the list of hosts for a given event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {};
    try {
        var response = await meetup.hosts.getHostsForEvent(urlname, eventId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Members
    Member Recent Events
    /* Gets a listing of most recent/past Meetup Events the authenticated member has RSVP'd */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = 256006529;
    var data = {};
    try {
        var response = await meetup.members3.getMemberRecentEvents(memberId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Meta
    API Status
    /* Returns the current API service status */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.meta.getAPIStatus(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Notifications
    Get Notifications
    /* Returns all recent Meetup notifications for the authorized member */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.notifications.getNotifications(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Clicked Notifications
    /* Marks groups of notifications as clicked */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
        notif_id: '644482948849258496'
    };
    try {
        var response = await meetup.notifications.markAsClickedNotifications(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Read Notifications
    /* Marks groups of notifications as read */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
        notif_id: '644482948849258496'
    };
    try {
        var response = await meetup.notifications.markAsReadNotifications(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Photos
    Event Photos
    /* Lists photos for a given event */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    try {
        var response = await meetup.photos3.getEventPhotos(urlname, eventId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Upload Event Photo
    /* Uploading new Event photos */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
        photo: 'file'
    };
    try {
        var response = await meetup.photos3.uploadEventPhoto(urlname, eventId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Event Photo Info
    /* Gets information about a specific photo */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var data = {};
    try {
        var response = await meetup.photos3.getEventPhotoInfo(urlname, eventId, photoId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Update Event Photo Info
    /* Edits photo details */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var data = {
        caption: ''
    };
    try {
        var response = await meetup.photos3.updateEventPhotoInfo(urlname, eventId, photoId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Delete Event Photo Info
    /* Deletes a specified event photo */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    try {
        var response = await meetup.photos3.deleteEventPhoto(urlname, eventId, photoId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Photo Comments
    /* Lists photo comments associated with a photo */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var data = {};
    try {
        var response = await meetup.photos3.getPhotoComments(urlname, eventId, photoId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Add Photo Comment
    /* Creates a new photo comment */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var data = {
        comment: 'Good'
    };
    try {
        var response = await meetup.photos3.createPhotoComment(urlname, eventId, photoId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Delete Photo Comment
    /* Deletes photo comments */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var photoId = 476282729;
    var commentId = 55504466;
    try {
        var response = await meetup.photos3.deletePhotoComment(urlname, eventId, photoId, commentId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Photo Album List
    /* Gets a list a group photo albums */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {};
    try {
        var response = await meetup.photos3.getPhotoAlbumList(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Photo Album Info
    /* Gets information about a specific photo album */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var albumId = 29435816;
    var data = {};
    try {
        var response = await meetup.photos3.getPhotoAlbumInfo(urlname, albumId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Album Photos
    /* Lists photos for a given photo album */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var albumId = 29435816;
    var data = {};
    try {
        var response = await meetup.photos3.getPhotosOfAlbum(urlname, albumId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Upload Album Photos
    /* Support for uploading new Album photos */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var albumId = 29435816;
    var data = {
        photo: 'file'
    }
    try {
        var response = await meetup.photos3.uploadAlbumPhoto(urlname, albumId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get All Album Photos
    /* Lists of all photos uploaded for the group */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {};
    try {
        var response = await meetup.photos3.getAllAlbumPhotos(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Upload Member Photo
    /* Support for uploading new Member photos */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = 256006529;
    var data = {
        photo: 'file',
        main: false
    };
    try {
        var response = await meetup.photos3.uploadMemberPhoto(memberId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Delete Member Photo
    /* Deletes a member photo by id */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberPhotoId = '282088343';
    try {
        var response = await meetup.members2.deleteMemberPhoto(memberPhotoId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Preferences
    Get preference and permission data
    /* Returns preference and permission data for the specified product domain */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var domain = 'gdg';
    var data = {};
    try {
        var response = await meetup.preferences.getPreference(urlname, domain, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Update a preference
    /* Updates the specified preference for the specified product domain */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var domain = 'gdg';
    var data = {
        name: 'test' // preference name
    };
    try {
        var response = await meetup.preferences.updatePreference(urlname, domain, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Pro
    Search Pro Groups
    /* Name and statistics range search for the meetup groups belonging to Pro organization */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'gdg';
    var data = {};
    try {
        var response = await meetup.pro.getProGroups(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Search Pro Members
    /* Name, location, and time based search for the members of the meetups belonging to Pro organization */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'gdg';
    var data = {};
    try {
        var response = await meetup.pro.getProGroupsMembers(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Search Issued Pro Tickets
    /* Redeemed chapter, redeemed member, status, and timestamp for tickets belonging to Pro organization */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'gdg';
    var data = {};
    try {
        var response = await meetup.pro.getProGroupsTickets(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }


#### Profiles
    Membership Approval
    /* Approves one or more requests for group membership */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {};
    try {
        var response = await meetup.profiles3.approveMembershipRequests(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Membership Decline
    /* Declines one or more requests for group membership */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {};
    try {
        var response = await meetup.profiles3.deleteMembershipRequests(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Group Profile list
    /* Get a list of Meetup group members */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {};
    try {
        var response = await meetup.profiles3.getGroupProfileList(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Group Join
    /* This method allows an authenticated member to join a group by creating a profile */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    try {
        var response = await meetup.profiles3.joinGroup(urlname);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Group Member Profile
    /* Gets Group Profiles */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var memberId = 266277924;
    var data = {};
    try {
        var response = await meetup.profiles3.getGroupMemberProfile(urlname, memberId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Edit Group Member Profile
    /* Edits Group Profiles */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var memberId = 266277924;
    var data = {
        remove_role: 'coorganizer'
    };
    try {
        var response = await meetup.profiles3.updateGroupMemberProfile(urlname, memberId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Delete Group Member Profile (Leave Group)
    /* Deletes a member's group profiles */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'DigitalOceanSurat';
    var memberId = 266277924;
    var data = {};
    try {
        var response = await meetup.profiles3.deleteOrLeaveGroupMemberProfile(urlname, memberId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Group Profile search
    /* Find group member profiles by name */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {
        query: 'pat'
    };
    try {
        var response = await meetup.profiles3.findGroupMemberProfileByName(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Get Member Profile
    /* Gets Member Profiles By Id */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = 266277924;
    var data = {};
    try {
        var response = await meetup.profiles3.getMemberProfileById(memberId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Update Member Profile
    /* Updates Member Profiles By Id */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var memberId = 266277924;
    var data = {
        gender: 'male'
    };
    try {
        var response = await meetup.profiles3.updateMemberProfileById(memberId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### rsvps
    Event RSVP list
    /* Retrieves list of event RSVPs */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {};
    try {
        var response = await meetup.rsvps3.getEventRsvpList(urlname, eventId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Create and Update RSVP
    /* Creates or updates an existing RSVP */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var eventId = 256006529;
    var data = {
        response: 'no'
    };
    try {
        var response = await meetup.rsvps3.createOrUpdateEventRsvp(urlname, eventId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Topics
    Find Topic Categories
    /* Returns a list high level topic categories */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.topics3.findTopicCategories(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Find Topics
    /* Find topics by name */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
        query: 'food'
    };
    try {
        var response = await meetup.topics3.findTopicsByName(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Recommend Group Topics
    /* Recommends suggestions for group topics based on a text search or other topics */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
        text: 'food'
    };
    try {
        var response = await meetup.topics3.getRecommendGroupTopics(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

#### Venues
    Group Venues
    /* Group Venues */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {};
    try {
        var response = await meetup.venues3.getGroupPreviousVenus(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Create Venue
    /* Interface for creating new Meetup venues */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var urlname = 'GDG_Surat';
    var data = {
        address_1: 'Opp. Police Station, Station Main Rd, Surat, Gujarat 395006 · Surat',
        city: 'surat',
        country: 'IN',
        state: 'GJ',
        name: 'main uniq name'
    };
    try {
        var response = await meetup.venues3.createMeetupVenue(urlname, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Find Venues
    /* Returns list of venues based on location and text */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {
        text: 'food'
    };
    try {
        var response = await meetup.venues3.findVenuesByLocation(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    -------------------------------------------------------------------------------------
    Recommended Venues
    /* Returns venues Meetup finds relevant to you based on location and category */

    var clientSecret = utils.clientSecret;
    meetup.setApiKey(clientSecret);
    var data = {};
    try {
        var response = await meetup.venues3.getRecommendedVenues(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }

