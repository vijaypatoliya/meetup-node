'use strict';

var utils = require('../../utils');

var { clientSecret } = utils;

var meetup = require('../../../../lib')(clientSecret);

var topicsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   *
   * (required one of them) 
   * 
   * text (Free form text search)
   * other_topics (A comma-delimited list of topic ids to inform recommendations)
   * 
   * (optional)
   * 
   * exclude_topics (A comma-delimited list of topic ids to exclude from the recommendations)
   * lang (Defines a language preference for ordering results. Valid values are en-USen-AUde-DEeses-ESfr-FRit-ITpt-BRja-JPnl-NLko-KRpl-PLth-THtr-TRru-RUsv-SEpt-brpl-plit-itsv-seja-jpen-auru-rude-deen-usth-thtr-tres-esnl-nlfr-frko-krendefritptjanlkoplthtrrusv. You may also substitute this with the Accept-Language header)
   * page (Target number of recommendations to return. Defaults to 36.)
   */
  var data = {
    text: 'food'
  };
  try {
    var response = await meetup.topics3.getRecommendGroupTopics(data);
  } catch (error) {
    return;
  }
};

topicsRequest();
