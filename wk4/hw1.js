const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  function (error, response, body) {
  	const json = JSON.parse(body)
  	for(var i = 0; i <= 9; i++) {
      console.log(json[i].id, json[i].name);
    }
  }
);