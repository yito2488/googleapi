const main = async () => {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following line to run this code.
   */
  const text = `東京タワーの高さよりも、高い高層ビルがあるらしい。`;

  // Prepares a document, representing the provided text
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects sentiment of entities in the document
  const [result] = await client.analyzeEntitySentiment({ document });
  const entities = result.entities;

  console.log(`Entities and sentiments:`);
  entities.forEach((entity) => {
    console.log(JSON.stringify(entity));
  });
};

main();
