const utils = require('../../utils');

const { clientSecret } = utils;

const meetup = require('../../../../lib')(clientSecret);

const activityRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * member_id 
   * page_start
   */
  const data = {};
  try {
    const response = await meetup.activity.getActivityItems(data);
  } catch (error) {
    return;
  }
};

activityRequest();
