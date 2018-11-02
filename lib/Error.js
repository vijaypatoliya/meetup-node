'use strict';

var debug = require('debug')('meetup:Error');
var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error Class to wrap any errors returned by meetup-node
 */
function _Error() {
    this.populate.apply(this, arguments);
    var stack = (new Error(this.message)).stack;
    debug('stack ', stack);
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function (type, message) {
    this.Type = type;
    this.Message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error class
 * (Specifically for errors returned from meetup's REST API)
 */
var meetupError = _Error.meetupError = _Error.extend({
    Type: 'meetupError',
    Message: '',
    populate: function (raw) {
        this.Type = this.type || 'unknown';
        this.Code = raw.Code || 'GenericError';
        this.Message = raw.message || raw.error || 'unknown';
        this.StatusCode = raw.StatusCode || 'unknown';
    }
});

/**
 * Helper factory which takes raw meetup errors and outputs wrapping instances
 */
meetupError.generate = function () {
    return new _Error('Generic', 'Unknown Error');
};

// Specific meetup Error types:
_Error.meetupInvalidRequestError = meetupError.extend({type: 'meetupInvalidRequestError'});
_Error.meetupAPIError = meetupError.extend({type: 'meetupAPIError'});
_Error.meetupPermissionError = meetupError.extend({type: 'meetupPermissionError'});
_Error.meetupRateLimitError = meetupError.extend({type: 'meetupRateLimitError'});
_Error.meetupConnectionError = meetupError.extend({type: 'meetupConnectionError'});
