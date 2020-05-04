<template>
  <div id="app">
    <h1>Google Sentimental Analysis</h1>
    <hr />
    <div>
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
    </div>

    <div>
      <b-button block variant="primary" v-on:click="apiRequest">Start</b-button>
    </div>

    <pre class="mt-3 mb-0">{{ text }}</pre>
    <pre class="mt-3 mb-0">{{ responseText }}</pre>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  data() {
    return {
      text: '',
      postBody: { text: 'テスト' },
      responseText: 'aaa',
    };
  },
  methods: {
    apiRequest() {
      this.postBody.text = this.text;
      this.$api
        .post('/sentiment', this.postBody)
        .then((res) => {
          console.log(res);
          this.responseText = res.data;
          //console.log("response: " + JSON.stringify(res));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    analyzeJson(response) {
      this.responseText = response;
      console.log(response);
    },
  },
};
</script>
