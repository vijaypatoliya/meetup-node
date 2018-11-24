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
   * country
   * past_rsvps_min
   * past_events_min
   * chapters
   * member_count_max
   * upcoming_events_min
   * lon
   * last_event_min
   * repeat_rsvpers_min
   * chapter_urlname
   * average_age_min
   * last_event_max
   * radius
   * lat
   * founded_date_min
   * order
   * zip
   * inactive_within_days
   * offset
   * topics
   * query
   * upcoming_events_max
   * average_age_max
   * pro_join_date_max
   * next_event_min
   * past_rsvps_max
   * active_within_days
   * rsvps_per_event_min
   * founded_date_max
   * excluded_chapters
   * member_count_min
   * past_events_max
   * name
   * next_event_max
   * repeat_rsvpers_max
   * location
   * page
   * pro_join_date_min
   * rsvps_per_event_max
   * category
   * desc
   * only
   * omit
   */
  var urlname = 'gdg';
  var data = {};
  try {
    var response = await meetup.pro.getProGroups(urlname, data);
  } catch (error) {
    return;
  }
};

proRequest();
