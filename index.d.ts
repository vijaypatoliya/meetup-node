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

declare class meetupNodeClient {

  activity: Activity;

  comment: Comment;

  oembed: Oembed;

  topic: Topic;

  constructor()

  constructor(clientSecret: string);

  setApiKey(clientSecret: string): void;

  setHost(host?: string, port?: string, protocol?: string): void;
}

declare namespace meetupNodeClient {

}
export = meetupNodeClient; 