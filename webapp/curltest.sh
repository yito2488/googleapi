#!/bin/sh
curl -X POST http://localhost:3000/sentiment -H "Accept: application/json" -H "Content-type: application/json" -d '{ "text":"今日は天気が晴れだったので、非常に気分が良い。昨日は雨で洗濯物が乾きませんでした。" }'
