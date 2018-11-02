var config = require('../../intialize/config');
var { clientSecret } = config;

var chai = require('chai');
var expect = chai.expect;

var meetup = require('../../../lib')(clientSecret);

describe('Activity', function () {

  it('It should get Activity list ', async function () {
    var data = {
      // member_id:1234
    };
    try {
      var response = await meetup.activity.getActivityItems(data).catch(error => {
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

 describe('Comment', function () {

   it('It should get Comment list ', async function () {
     var data = {
       group_id: 12
     };

     try {
       var response = await meetup.comment.getCommentItems(data).catch(error => {
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

// describe('Oembed', function () {

//   it('It should get Oembed list ', async function () {
//     var data = {
//       url: 'http://www.meetup.com/ny-tech'
//     };

//     try {
//       var response = await meetup.oembed.getOembedItems(data).catch(error => {
//         if (error) {
//           console.log('error ', error);
//           return;
//         }
//       });
//       console.log('response', response);
//       expect(response).to.be.a('object');
//     } catch (error) {
//       console.log('error ', error);
//       expect(response).to.be.a(undefined);
//     }
//   });
// });

 describe('Topic', function () {

   it('It should get Topic list ', async function () {
     var data = {};

     try {
       var response = await meetup.topic.getTopicItems(data).catch(error => {
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
