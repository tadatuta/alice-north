const { json } = require('micro');
const getResponse = require('./lib/logic');

module.exports = async req => {
    const { request, session, version } = await json(req);

    return {
        version,
        session,
        response: {
            text: getResponse({ request, session }),

            end_session: false
        }
    };
};
