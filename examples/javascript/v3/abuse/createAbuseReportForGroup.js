'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var abuseRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * type (Acceptable values include dangerous, graphic_content, graphic_photo, harmful_activities, licensed_services, not_accurate, not_community, not_irl, nudity, other, promotion_focus, sex, smyte_warn, transactional, violence)
   */
  var urlname = 'GDG_Surat';
  var data = {
    type: 'graphic_photo'
  };
  try {
    var response = await meetup.abuse.createAbuseReportForGroup(urlname, data);
  } catch (error) {
    return;
  }
};

abuseRequest();
