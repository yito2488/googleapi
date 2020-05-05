<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center m-3">Google Sentimental Analysis</h1>
    </div>
    <div class="container">
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." class="mx-auto m-3" rows="3" max-rows="6"></b-form-textarea>
      <p>
        <b-button block variant="primary" v-on:click="apiRequest">Start</b-button>
      </p>
      <pre class="mt-3 mb-0">Text: {{ text }}</pre>
    </div>

    <div class="container">
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
      overall: { face: '', score: '-', magnitude: '-', language: 'jp' },
      sentenses: {},
      facelists: { heart: '😍', smile: '😃', slightlySmile: '🙂', neutral: '😐', anguished: '😧', confounded: '😖', pounting: '😡' },
    };
  },
  methods: {
    apiRequest() {
      this.postBody.text = this.text;
      this.$api
        .post('/sentiment', this.postBody)
        .then((res) => {
          console.log(res);
          this.analyzeJson(res.data);
          //this.responseText = res.data;
          //console.log("response: " + JSON.stringify(res));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    analyzeJson(response) {
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
