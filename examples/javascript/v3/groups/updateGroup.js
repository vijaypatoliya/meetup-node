'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   * 
   * (optional)
   * 
   * add_topics
   * country
   * description
   * dryrun
   * ga_code
   * join_mode
   * key_photo
   * list_addr
   * list_mode
   * name
   * photo_req
   * question_edit_{id}
   * question_{index}
   * questions_req
   * remove_topics
   * urlname
   * visibility
   * welcome_message
   * who
   * zip
   * {service}_uri
   */
  var urlname = 'GDG_Surat';
  var data = {
    add_topics: 18528
  };
  try {
    var response = await meetup.groups3.updateGroup(urlname, data);
  } catch (error) {
    return;
  }
};

groupsRequest();
