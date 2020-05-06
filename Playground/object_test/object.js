const obj = {
  sentences: [
    {
      text: {
        content: 'こんにちは。',
        beginOffset: -1,
      },
      sentiment: {
        magnitude: 0.4000000059604645,
        score: 0.4000000059604645,
      },
    },
    {
      text: {
        content: '今朝の天気は、一日中ぐずついていた。',
        beginOffset: -1,
      },
      sentiment: {
        magnitude: 1.30000001192092896,
        score: 0.30000001192092896,
      },
    },
    {
      text: {
        content: '首相とお揃いのアベノマスクも届いたので非常にうれしい。',
        beginOffset: -1,
      },
      sentiment: {
        magnitude: 0.8999999761581421,
        score: 0.8999999761581421,
      },
    },
  ],
  documentSentiment: {
    magnitude: 1.7000000476837158,
    score: 0.5,
  },
  language: 'ja',
};

console.log(obj.sentences);
for (let i = 0; i < obj.sentences.length; i++) {
  console.log(obj.sentences[i].text.content);
  console.log(obj.sentences[i].sentiment.magnitude);
  console.log(obj.sentences[i].sentiment.score);
}
