const utils = require('../../utils');

const { clientSecret } = utils;

const meetup = require('../../../../lib')(clientSecret);

const oembedRequest = async function () {
    /**
     * passing parameters 
     * -------------------
     * 
     * (required)
     * url 
     * 
     * (optional)
     * maxwidth
     */
    const data = {
        url: 'http://www.meetup.com/ny-tech'
    };
    try {
        const response = await meetup.oembed.getOembedItems(data);
    } catch (error) {
        return;
    }
};

oembedRequest();
