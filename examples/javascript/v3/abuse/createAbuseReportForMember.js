'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var abuseRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (required)
   * 
   * type (Acceptable values include dangerous, graphic_content, graphic_photo, harmful_activities, licensed_services, not_accurate, not_community, not_irl, nudity, other, promotion_focus, sex, smyte_warn, transactional, violence)
   * 
   * (optional)
   * 
   * comments
   * content_tag
   * member_id
   * url
   */
  var data = {
    type: 'other',
    member_id: 266277924
  };
  try {
    var response = await meetup.abuse.createAbuseReportForGroup(data);
  } catch (error) {
    return;
  }
};

abuseRequest();
