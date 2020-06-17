const moment = require('moment');
const greeting = {
  "en": "Hello",
  "fr": "Bonjour",
  "hi": "Namaste",
  "es": "Hola",
  "pt": "Olá",
  "ur": "Assalamo aleikum",
  "it": "Ciao",
  "de": "Hallo"
};

exports.handler = async (event) => {
  let name = event.pathParameters.name;
  let { lang, ...info } = event.queryStringParameters;

  let message = `${greeting[lang] ? greeting[lang] : greeting['eng']} ${name}`;
  let response = {
    message,
    info,
    timestamp: moment().unix()
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};