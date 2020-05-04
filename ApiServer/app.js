require('dotenv').config();
const { sentimentReq } = require('./sentiment');
const express = require('express');
const app = express();
const port = 3000;

//To analyze json format that is posted from clients
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
const cors = require('cors');
app.use(cors());

const defaultText = 'こんにちは。今朝の天気は、一日中ぐずついていた。首相とお揃いのアベノマスクも届いたので非常にうれしい。';

//To process get request
app.get('/sentiment', async (req, res) => {
  res.send(await sentimentReq(defaultText));
});

//To process post request
app.post('/sentiment', async (req, res) => {
  //console.log(req);
  console.log(req.body.text);
  res.send(await sentimentReq(req.body.text));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
