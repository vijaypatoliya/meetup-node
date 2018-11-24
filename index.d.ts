// Type definitions for meetup-node

declare class BaseClient {

}

declare class Activity extends BaseClient {

  getActivityItems(params: any): Promise<any>;

}

declare class Comment extends BaseClient {

  getCommentItems(params: any): Promise<any>;

}

declare class Oembed extends BaseClient {

  getOembedItems(params: any): Promise<any>;

}

declare class Topic extends BaseClient {

  getTopicItems(params: any): Promise<any>;

}

declare class Categories extends BaseClient {

  getCategories(params: any): Promise<any>;

}

declare class Cities extends BaseClient {

  getCities(params: any): Promise<any>;

}

declare class Dashboard extends BaseClient {

  getDashboard(params: any): Promise<any>;

}

declare class Events2 extends BaseClient {

  getConcierge(params: any): Promise<any>;

  createEvent(params: any): Promise<any>;

  updateEvent(eventId: string, params: any): Promise<any>;

  deleteEvent(eventId: string): Promise<any>;

  getEvents(params: any): Promise<any>;

  createEventComment(eventId: string, params: any): Promise<any>;

  getEventComment(eventCommentId: string): Promise<any>;

  deleteEventComment(eventCommentId: string): Promise<any>;

}

declare class Groups2 extends BaseClient {

  uploadGroupPhoto(groupId: string, photo: File, params: any): Promise<any>;

  getGroups(groupId: string): Promise<any>;

}

declare class Members2 extends BaseClient {

  getMember(memberId: string): Promise<any>;

  updateMember(memberId: string, params: any): Promise<any>;

  uploadMemberPhoto(photo: File, params: any): Promise<any>;

  deleteMemberPhoto(memberPhotoId: string): Promise<any>;

  getMembers(params: any): Promise<any>;

}

declare class Photos2 extends BaseClient {

  uploadEventPhoto(eventId: string, photo: File, params: any): Promise<any>;

  updateEventPhoto(eventPhotoId: string, params: any): Promise<any>;

  deleteEventPhoto(eventPhotoId: string): Promise<any>;

  createPhotoAlbum(groupId: string, params: any): Promise<any>;

  getPhotoAlbums(groupId: string): Promise<any>;

  addPhotoComment(photoId: string, params: any): Promise<any>;

  getPhotoComments(photoId: string): Promise<any>;

  getPhotos(params: any): Promise<any>;

}

declare class Photos2 extends BaseClient {

  createGroupProfile(groupId: string): Promise<any>;

  getGroupProfile(groupId: string, memberId: string): Promise<any>;

  updateGroupProfile(groupId: string, memberId: string, params: any): Promise<any>;

  deleteGroupProfile(groupId: string, memberId: string): Promise<any>;

  getGroupProfiles(params: any): Promise<any>;

}

declare class Rsvps2 extends BaseClient {

  createOrUpdateRsvp(eventId: string): Promise<any>;

  getRsvp(rsvpId: string): Promise<any>;

  getRsvps(params: any): Promise<any>;

}

declare class Streams2 extends BaseClient {

  getEventComments(eventId: string, params: any): Promise<any>;

  getOpenEvents(params: string): Promise<any>;

  getOpenVenues(params: any): Promise<any>;

  getPhotos(params: any): Promise<any>;

  getRsvps(params: any): Promise<any>;

}

declare class Topics2 extends BaseClient {

  getTopicCategories(params: any): Promise<any>;

}

declare class Venues2 extends BaseClient {

  getOpenVenues(params: any): Promise<any>;

  getVenues(params: any): Promise<any>;

}

declare class Abuse extends BaseClient {

  createAbuseReportForGroup(urlname: string, params: any): Promise<any>;

  createAbuseReportForMember(params: any): Promise<any>;

  getBlockStatus(memberId: string): Promise<any>;

  blockMember(memberId: string, params: any): Promise<any>;

  unblockMember(memberId: string): Promise<any>;

}

declare class Batch extends BaseClient {

  callBatchRequest(params: any): Promise<any>;

}

declare class Boards extends BaseClient {

  getListOfGroupDiscussionBoards(urlname: string): Promise<any>;

  getListOfGroupDiscussions(urlname: string, bid: string): Promise<any>;

  getListOfGroupDiscussionPosts(urlname: string, bid: string, did: string): Promise<any>;

}

declare class Comments extends BaseClient {

  getEventCommentsAndRepliesList(urlname: string, eventId: string): Promise<any>;

  addEventCommentsOrReplies(urlname: string, eventId: string, params: any): Promise<any>;

  deleteEventCommentsOrReplies(urlname: string, eventId: string, commentId: string): Promise<any>;

  getEventCommentsAndRepliesLikes(urlname: string, eventId: string, commentId: string): Promise<any>;

  addEventCommentsAndRepliesLikes(urlname: string, eventId: string, commentId: string): Promise<any>;

  deleteEventCommentsAndRepliesLikes(urlname: string, eventId: string, commentId: string): Promise<any>;

}

declare class Events3 extends BaseClient {

  getEventsList(urlname: string): Promise<any>;

  creatEvent(urlname: string, params: any): Promise<any>;

  closeEventRsvps(urlname: string, eventId: string): Promise<any>;

  openEventRsvps(urlname: string, eventId: string): Promise<any>;

  getEventData(urlname: string, eventId: string): Promise<any>;

  updateEvent(urlname: string, eventId: string, params: any): Promise<any>;

  deleteEvent(urlname: string, eventId: string): Promise<any>;

  getEventAttendanceRecords(urlname: string, eventId: string): Promise<any>;

  addEventAttendance(urlname: string, eventId: string, params: any): Promise<any>;

  addEventPayment(urlname: string, eventId: string, params: any): Promise<any>;

  getUpcomingEvents(params: any): Promise<any>;

  getSelfCalenderSavedUpcomingEvents(params: any): Promise<any>;

  getSelfScheduledEvents(params: any): Promise<any>;

}

declare class Geo extends BaseClient {

  getLocations(params: any): Promise<any>;

}

declare class Groups3 extends BaseClient {

  getGroups(urlname: string): Promise<any>;

  updateGroup(urlname: string, params: any): Promise<any>;

  getSimilarGroups(urlname: string): Promise<any>;

  addGroupTopics(urlname: string, params: any): Promise<any>;

  removeGroupTopics(urlname: string, params: any): Promise<any>;

  getGroups(params: any): Promise<any>;

  getRecommendedGroups(params: any): Promise<any>;

  ignoreRecommendedGroups(urlname: string): Promise<any>;

  getSelfGroups(params: any): Promise<any>;

}

declare class Hosts extends BaseClient {

  getHostsForEvent(urlname: string, eventId: string, params: any): Promise<any>;

}

declare class Members3 extends BaseClient {

  getMemberRecentEvents(memberId: string, params: any): Promise<any>;

}

declare class Meta extends BaseClient {

  getAPIStatus(params: any): Promise<any>;

}

declare class Notification extends BaseClient {

  getNotifications(params: any): Promise<any>;

  markAsClickedNotifications(params: any): Promise<any>;

  markAsReadNotifications(params: any): Promise<any>;

}

declare class Photos3 extends BaseClient {

  getEventPhotos(urlname: string, eventId: string): Promise<any>;

  uploadEventPhoto(urlname: string, eventId: string, params: any): Promise<any>;

  getEventPhotoInfo(urlname: string, eventId: string, photoId: string, params: any): Promise<any>;

  updateEventPhotoInfo(urlname: string, eventId: string, photoId: string, params: any): Promise<any>;

  deleteEventPhoto(urlname: string, eventId: string, photoId: string): Promise<any>;

  getPhotoComments(urlname: string, eventId: string, photoId: string, params: any): Promise<any>;

  createPhotoComment(urlname: string, eventId: string, photoId: string, params: any): Promise<any>;

  deletePhotoComment(urlname: string, eventId: string, photoId: string, commentId: string): Promise<any>;

  getPhotoAlbumList(urlname: string, params: any): Promise<any>;

  getPhotoAlbumInfo(urlname: string, albumId: string, params: any): Promise<any>;

  getPhotosOfAlbum(urlname: string, albumId: string, params: any): Promise<any>;

  uploadAlbumPhoto(urlname: string, albumId: string, params: any): Promise<any>;

  getAllAlbumPhotos(urlname: string, params: any): Promise<any>;

  uploadMemberPhoto(memberId: string, params: any): Promise<any>;

  deleteMemberPhoto(memberId: string, photoId: string, params: any): Promise<any>;

}

declare class Preferences extends BaseClient {

  getPreference(urlname: string, domain: string): Promise<any>;

  updatePreference(urlname: string, domain: any): Promise<any>;

}

declare class Pro extends BaseClient {

  getProGroups(urlname: string, params: any): Promise<any>;

  getProGroupsMembers(urlname: string, params: any): Promise<any>;

  getProGroupsTickets(urlname: string, params: any): Promise<any>;

}

declare class Profiles3 extends BaseClient {

  approveMembershipRequests(urlname: string, params: any): Promise<any>;

  deleteMembershipRequests(urlname: string, params: any): Promise<any>;

  getGroupProfileList(urlname: string, params: any): Promise<any>;

  joinGroup(urlname: string): Promise<any>;

  getGroupMemberProfile(urlname: string, memberId: string, params: any): Promise<any>;

  updateGroupMemberProfile(urlname: string, memberId: string, params: any): Promise<any>;

  deleteOrLeaveGroupMemberProfile(urlname: string, memberId: string, params: any): Promise<any>;

  findGroupMemberProfileByName(urlname: string, params: any): Promise<any>;

  getMemberProfileById(memberId: string, params: any): Promise<any>;

  updateMemberProfileById(memberId: string, params: any): Promise<any>;

}

declare class Rsvps3 extends BaseClient {

  getEventRsvpList(urlname: string, eventId: string, params: any): Promise<any>;

  createOrUpdateEventRsvp(urlname: string, eventId: string, params: any): Promise<any>;

}

declare class Topics3 extends BaseClient {

  findTopicCategories(params: any): Promise<any>;

  findTopicsByName(params: any): Promise<any>;

  getRecommendGroupTopics(params: any): Promise<any>;

}

declare class Venues3 extends BaseClient {

  getGroupPreviousVenus(urlname: string, params: any): Promise<any>;

  createMeetupVenue(urlname: string, params: any): Promise<any>;

  findVenuesByLocation(params: any): Promise<any>;

  getRecommendedVenues(params: any): Promise<any>;

}

declare class meetupNodeClient {

  constructor()

  constructor(clientSecret: string);

  setApiKey(clientSecret: string): void;

  activity: Activity;
  comment: Comment;
  oembed: Oembed;
  topic: Topic;
  categories: Categories;
  cities: Cities;
  dashboard: Dashboard;
  events2: Events2;
  groups2: Groups2;
  members2: Members2;
  photos2: Photos2;
  profiles2: Profiles2;
  rsvps2: Rsvps2;
  streams2: Streams2;
  topics2: Topics2;
  venues2: Venues2;
  abuse: Abuse;
  batch: Batch;
  boards: Boards;
  comments: Comments;
  events3: Events3;
  geo: Geo;
  groups3: Groups3;
  hosts: Hosts;
  members3: Members3;
  meta: Meta;
  notification: Notification;
  photos3: Photos3;
  preferences: Preferences;
  pro: Pro;
  profiles3: Profiles3;
  rsvps3: Rsvps3;
  topics3: Topics3;
  venues3: Venues3;
}

declare namespace meetupNodeClient {

}
export = meetupNodeClient;