const {
    successResponses, failResponses, intro, questions, ownPrefix, ownAnswers, triggerPhrases, ownEndings
} = require('./phrases');
const { getRandomArrayItem, getRandom } = require('./helpers');
const triggerPhrase = getRandomArrayItem(triggerPhrases);

module.exports = function(data) {
    const isSuccess = data.request.command.toLowerCase().includes(triggerPhrase);

    return [
        data.session.new ?
            intro :
            isSuccess ? successResponses : failResponses,
        ownPrefix,
        ownAnswers,
        ownEndings
    ]
        .map(getRandomArrayItem)
        .concat(getRandom(2) ?
            [triggerPhrase + '!', getRandomArrayItem(questions)] :
            [getRandomArrayItem(questions), triggerPhrase + '!']
        )
        .join(' ');
};
