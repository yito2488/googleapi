<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center m-3">Google Sentimental Analysis</h1>
    </div>
    <div class="container">
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." class="mx-auto m-3" rows="3" max-rows="6"></b-form-textarea>
      <p>
        <b-button block variant="primary" v-on:click="apiRequest">Analyze</b-button>
      </p>
      <pre class="mt-3 mb-0">Text: {{ text }}</pre>
    </div>

    <div class="container">
      <h3>Overall</h3>
      <table class="table table-boarderd m-3">
        <thead>
          <tr>
            <th scope="col">expression</th>
            <th scope="col">score</th>
            <th scope="col">magnitude</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="h1">{{ overall.face }}</td>
            <td>{{ overall.score }}</td>
            <td>{{ overall.magnitude }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container">
      <h3>Details</h3>
      <b-table striped hover :items="items"></b-table>
      <hr />
      Detected Language: {{ overall.language }}
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  data() {
    return {
      text: '',
      postBody: { text: 'テスト' },
      overall: { face: '', score: '-', magnitude: '-', language: '-' },
      facelists: { heart: '😍', smile: '😃', slightlySmile: '🙂', neutral: '😐', anguished: '😧', confounded: '😖', pounting: '😡' },
      items: [],
    };
  },
  methods: {
    apiRequest() {
      this.postBody.text = this.text;
      this.$api
        .post('/sentiment', this.postBody)
        .then((res) => {
          console.log(res);
          this.items = [];
          this.analyzeOverallJson(res.data);
          this.analyzeEachtextJson(res.data);
          //this.responseText = res.data;
          //console.log("response: " + JSON.stringify(res));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    analyzeEachtextJson(response) {
      const obj = response;
      for (let i = 0; i < obj.sentences.length; i++) {
        //prepare valuables in advance
        const sentiment = {};
        const content = obj.sentences[i].text.content;
        const score = obj.sentences[i].sentiment.score;
        const magnitude = obj.sentences[i].sentiment.magnitude;

        // store into the object
        // This object order is the same as the table items
        sentiment.content = content;
        sentiment.expression = this.selectExpression(score, magnitude);
        sentiment.score = score;
        sentiment.magnitude = magnitude;
        this.items.push(sentiment);
      }
    },
    analyzeOverallJson(response) {
      this.overall = {
        score: response.documentSentiment.score.toFixed(2),
        magnitude: response.documentSentiment.magnitude.toFixed(2),
        face: this.selectExpression(response.documentSentiment.score, response.documentSentiment.magnitude),
        language: response.language,
      };
      console.log(this.overall);
      this.responseText = response;
      console.log(response);
    },
    selectExpression(score, magnitude) {
      const multiple = Math.ceil(magnitude);
      if (score === 0) return this.facelists.neutral.repeat(multiple);
      else if (score <= -0.5) return this.facelists.pounting.repeat(multiple);
      else if (score <= -0.25) return this.facelists.confounded.repeat(multiple);
      else if (score < 0) return this.facelists.anguished.repeat(multiple);
      else if (score <= 0.25) return this.facelists.slightlySmile.repeat(multiple);
      else if (score <= 0.5) return this.facelists.smile.repeat(multiple);
      else if (score <= 1) return this.facelists.heart.repeat(multiple);
    },
  },
};
</script>
