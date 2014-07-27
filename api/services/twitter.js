var Twit = require('twit');

var T = new Twit({
    consumer_key:         '5U68HimGxlTFka5P6s9l59aMf'
  , consumer_secret:      'PRsrPWW3OcK020bVj2ERo76FYw7sobdlJKM61Qw9Npzl8tgak0'
  , access_token:         '77126387-EkdOTj7hGyhkc7aiEvJap02M83R2DnE3Bjgnyyk5k'
  , access_token_secret:  'HMGSEpPt6vPdwvEjuaGOJeGXwnvecYyM4kALJ2vuhgiM3'
});

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
});