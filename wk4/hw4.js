const request = require('request')

request({
  url: 'https://api.twitch.tv/kraken/games/top?limit=50',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '____'
  }
  }, function (error, response, body) {
    const json = JSON.parse(body)
    console.log(json)
    for (let i = 0; i < json.top.length; i++) {
      console.log(json.top[i].viewers, json.top[i].game.name)
    }
})