const assert = require('assert');
const logic = require('../lib/logic');
const { successResponses, failResponses, triggerPhrases } = require('../lib/phrases');
const triggerPhrase = triggerPhrases[0];
const { isOneOf } =  require('../lib/helpers');

describe('initial', function() {
    it('should ask for response for new session', function() {
        const result = logic({
            session: { new: true },
            request: {
                command: `а я возьму валенки и пойду на север, ${triggerPhrase}!`
            }
        });

        assert(!isOneOf(result, successResponses));
    });
});

describe('success', function() {
    it('should respond with success', function() {
        const result = logic({
            session: { new: false },
            request: {
                command: `а я возьму валенки и пойду на север, ${triggerPhrase}!`
            }
        });

        assert(isOneOf(result, successResponses));
    });
});

describe('fail', function() {
    it('should respond with fail', function() {
        const result = logic({
            session: { new: false },
            request: {
                command: 'а я возьму валенки и пойду на север!'
            }
        });

        assert(isOneOf(result, failResponses));
    });
});
