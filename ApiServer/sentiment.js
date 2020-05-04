require('dotenv').config();
module.exports.sentimentReq = async (text) => {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Instantiates a client
  const client = new language.LanguageServiceClient();

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({ document: document });
  return result;
};

//
//The following function allows you to input from stdin and call sentimentReq function
//

//const standardIO = async () => {
//  const readlineSync = require('readline-sync');
//
//  //Show prompt and wait for input from the user
//  const text = readlineSync.question('Please input sentense(s): ');
//
//  const result = await sentimentReq(text);
//  console.log(JSON.stringify(result));
//  console.log(result.documentSentiment.magnitude, result.documentSentiment.score, result.language);
//};
//
//standardIO();
//
//module.exports = sentimentReq;
