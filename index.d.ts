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

  addPhotoComment(PhotoId: string, params: any): Promise<any>;

  getPhotoComments(PhotoId: string): Promise<any>;

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

}

declare namespace meetupNodeClient {

}
export = meetupNodeClient;