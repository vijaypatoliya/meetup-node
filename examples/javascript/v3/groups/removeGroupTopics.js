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
   * topic_id
   */
  var urlname = 'GDG_Surat';
  var data = {
    topic_id: 18528
  };
  try {
    var response = await meetup.groups3.removeGroupTopics(urlname, data);
  } catch (error) {
    return;
  }
};

groupsRequest();
