'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = undefined;

var jokes = [
    "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.<audio src='https://s3.amazonaws.com/ask-soundlibrary/cartoon/amzn_sfx_boing_long_1x_01.mp3'/>",
    " Anton, do you think I’m a bad mother?<audio src='https://s3.amazonaws.com/ask-soundlibrary/foley/amzn_sfx_clock_ticking_01.mp3'/> Anton replies, My name is Paul.<audio src='https://s3.amazonaws.com/ask-soundlibrary/human/amzn_sfx_laughter_giggle_01.mp3'/>",
    "What is the difference between a snowman and a snowwoman?<audio src='https://s3.amazonaws.com/ask-soundlibrary/foley/amzn_sfx_clock_ticking_01.mp3'/>Snowballs.<audio src='https://s3.amazonaws.com/ask-soundlibrary/human/amzn_sfx_laughter_giggle_01.mp3'/>"
];

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask','Hi, how can I help you');
    },

    'MakeJoke': function () {
       // this.emit(':tell','hey there');
        var myIndex = Math.floor(Math.random() * jokes.length);
        var randomQuote = jokes[myIndex];
        var speechOutput = ""+ randomQuote;
        this.emit(":tellWithCard", speechOutput, 'joke-maker', randomQuote);
    },

    'AMAZON.HelpIntent': function () {
        var speechOutput = "Say get me a joke Alexa";
        var reprompt = "Say tell me a joke Alexa";
        this.emit(":ask", speechOutput, reprompt);
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "GoodBye!");
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', "GoodBye!");
    },
    
    'SessionEndedRequest': function () {
        console.log('session ended!');
    }
}

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
