const utils = require('../../utils');

const { clientSecret } = utils;

const meetup = require('../../../../lib')(clientSecret);

const commentRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (At least one of the required parameter(s))
   * group_id
   * group_urlname
   * topic, groupnum
   * 
   * (optional)
   * page 
   * offset
   * desc
   * only
   * omit
   */
  const data = {};
  try {
    const response = await meetup.comment.getCommentItems(data);
  } catch (error) {
    return;
  }
};

commentRequest();
