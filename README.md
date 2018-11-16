# meetup-node (Meetup Node Rest API)
[![Build Status](https://travis-ci.org/vijaypatoliya/meetup-node.svg?branch=master)](https://travis-ci.org/vijaypatoliya/meetup-node)
This API supported MeetUp standard REST API that accepts/returns JSON requests. Here is the [API reference] (https://www.meetup.com/meetup_api/)

You can find [examples of JavaScript](https://github.com/vijaypatoliya/meetup-node/tree/master/examples). This will help you for faster implementation of MeetUp APIs.

##### It does supports EcmaScript 5, EcmaScript 6,  EcmaScript 8, TypeScript, async-await, Promises, Callback !
##### It does also supports for AWS Lambda like serverless cloud function call.
##### It supports pure JSON response.
##### All methods support Promise and Callback both.

## Test Cases
```bash
npm run test.mocha
```

## Debugging
```bash
export DEBUG=meetup:*
```

## Usage
```bash
export MEETUP_SECRET=KEY
```

## Configuration Using JavaScript
```js
var meetUp = require('meetup-node')('YOUR_KEY');
```

```
Originally by [Vijay Patoliya](https://github.com/vijaypatoliya) (osi.vijay@gmail.com).
```
 
