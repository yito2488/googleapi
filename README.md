# gdemo

## How to run this program

1. Run API Server
2. Run WebServer

## API server is the backend server.

1. Receive request from clients
2. Send request to Google API server, and get results.
3. Send back to the clients

### How to test with curl command?

#### 1. Enter to ApiServer directory

#### 2. Create ".env" file on the ApiServer Directory

GOOGLE_APPLICATION_CREDENTIALS="/YOUR_DIRECTORY_PATH/google.key"

#### 3. Run server with "npm start" command

#### 4. Test it

curl -X POST http://localhost:3000/sentiment -H “Accept: application/json” -H “Content-type: application/json” -d ‘{ “text” : “今日は天気が晴れだったので、非常に気分が良い。昨日は雨で洗濯物が乾きませんでした。" }'

## WebAPI

Provide GUI for users

1. Send request to API server
2. Get results from API server
3. Show the resutls
