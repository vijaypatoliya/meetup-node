'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var profilesRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * urlname
   * memberId
   * 
   * (optional)
   * 
   * add_role
   * answer_{qid}
   * fields
   * intro
   * photo_id
   * remove_role
   * title
   */
  var urlname = 'GDG_Surat';
  var memberId = 266277924;
  var data = {
    remove_role: 'coorganizer'
  };
  try {
    var response = await meetup.profiles3.updateGroupMemberProfile(urlname, memberId, data);
  } catch (error) {
    return;
  }
};

profilesRequest();
