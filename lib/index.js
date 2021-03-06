'use strict';

// var debug = require('debug')('meetup:meetup-node-index');
meetup.DEFAULT_HOST = 'api.meetup.com';
meetup.DEFAULT_PORT = '443';
meetup.DEFAULT_BASE_PATH = '/';
meetup.DEFAULT_RESPONSE_FORMAT = '.json';
meetup.DEFAULT_API_VERSION = null;

// Use node's default timeout:
meetup.DEFAULT_TIMEOUT = require('http').createServer().timeout;

meetup.PACKAGE_VERSION = require('../package.json').version;

var resources = {
  activity: require('./resources/v1/activity'),
  comment: require('./resources/v1/comment'),
  oembed: require('./resources/v1/oembed'),
  topic: require('./resources/v1/topic'),
  categories: require('./resources/v2/categories'),
  cities: require('./resources/v2/cities'),
  dashboard: require('./resources/v2/dashboard'),
  events2: require('./resources/v2/events'),
  groups2: require('./resources/v2/groups'),
  members2: require('./resources/v2/members'),
  photos2: require('./resources/v2/photos'),
  profiles2: require('./resources/v2/profiles'),
  rsvps2: require('./resources/v2/rsvps'),
  streams: require('./resources/v2/streams'),
  topics2: require('./resources/v2/topics'),
  venues2: require('./resources/v2/venues'),
  abuse: require('./resources/v3/abuse'),
  batch: require('./resources/v3/batch'),
  boards: require('./resources/v3/boards'),
  comments: require('./resources/v3/comments'),
  events3: require('./resources/v3/events'),
  geo: require('./resources/v3/geo'),
  hosts: require('./resources/v3/hosts'),
  members3: require('./resources/v3/members'),
  meta: require('./resources/v3/meta'),
  notifications: require('./resources/v3/notifications'),
  groups3: require('./resources/v3/groups'),
  photos3: require('./resources/v3/photos'),
  preferences: require('./resources/v3/preferences'),
  pro: require('./resources/v3/pro'),
  profiles3: require('./resources/v3/profiles'),
  rsvps3: require('./resources/v3/rsvps'),
  topics3: require('./resources/v3/topics'),
  venues3: require('./resources/v3/venues')
};

meetup.meetupResource = require('./Resource');
meetup.resources = resources;

function meetup(clientSecret) {
  if (!(this instanceof meetup)) {
    return new meetup(clientSecret);
  }

  this._api = {
    auth: null,
    host: meetup.DEFAULT_HOST,
    port: meetup.DEFAULT_PORT,
    basePath: meetup.DEFAULT_BASE_PATH,
    version: meetup.DEFAULT_API_VERSION,
    timeout: meetup.DEFAULT_TIMEOUT
  };

  this._prepResources();
  this.setApiKey(clientSecret);
  this.setResponseFormat(meetup.DEFAULT_RESPONSE_FORMAT);
}

meetup.prototype = {

  setHost: function (host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol: function (protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort: function (port) {
    this._setApiField('port', port);
  },

  setResponseFormat: function (format) {
    this._setApiField('format', format);
  },

  setApiKey: function (accessKey) {
    if (accessKey) {
      this._setApiField('key', accessKey);
    }
  },

  setTimeout: function (timeout) {
    this._setApiField('timeout', timeout === null ? meetup.DEFAULT_TIMEOUT : timeout);
  },

  _setApiField: function (key, value) {
    this._api[key] = value;
  },

  getApiField: function (key) {
    return this._api[key];
  },

  _prepResources: function () {
    for (var name in resources) {
      this[name[0].toLowerCase() + name.substring(1)] = new resources[name](this);
    }
  }
};

module.exports = meetup;

module.exports.meetup = meetup;
