'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var proRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   * 
   * (optional)
   * 
   * zip
   * country
   * events_attended_max
   * offset
   * chapters
   * query
   * is_organizer
   * lon
   * member_name
   * active_within_days
   * join_time_min
   * email_received
   * events_attended_min
   * location
   * page
   * radius
   * join_time_max
   * lat
   * desc
   * order
   * only
   * omit
   */
  var urlname = 'gdg';
  var data = {};
  try {
    var response = await meetup.pro.getProGroupsMembers(urlname, data);
  } catch (error) {
    return;
  }
};

proRequest();
