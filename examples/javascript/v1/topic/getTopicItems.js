const utils = require('../../utils');

const { clientSecret } = utils;

const meetup = require('../../../../lib')(clientSecret);

const topicRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * member_id 
   * name
   * search
   * topic
   * order
   * page
   * offset
   * desc
   * only
   * omit
   */
  const data = {
    page: '20'
  };
  try {
    const response = await meetup.topic.getTopicItems(data);
  } catch (error) {
    return;
  }
};

topicRequest();
