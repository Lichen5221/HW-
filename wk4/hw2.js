const request = require('request');
const process = require('process')

const action = process.argv[2]
const id = process.argv[3]
const name = process.argv[4]

if(action === 'list') { 
  request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=20',
  function (error, response, body) {
    const json = JSON.parse(body)
    for(var i = 0; i <= 19; i++) {
      console.log(json[i].id, json[i].name);
    }
  })
} else if (action === 'read') {
    request(
    'https://lidemy-book-store.herokuapp.com/books/' + process.argv[3],
    function (error, response, body) {
      const json = JSON.parse(body)
      console.log(json)
    })
} else if (action === 'delete') {
    request.delete(
      'https://lidemy-book-store.herokuapp.com/books/' + process.argv[3],
    function (error, response, body) {
      const json = JSON.parse(body)
      console.log(json)
    })
} else if (action === 'create') {
    request.post(
      { url:'https://lidemy-book-store.herokuapp.com/books',
        form: {
          id,
          name,
        }
      },
      function (error, response, body) {
        const json = JSON.parse(body)
        console.log(json)
    })
} else if (action === 'update') {
    request.patch(
      { url:'https://lidemy-book-store.herokuapp.com/books/' + process.argv[3],
        form: {
          name,
        },
      },
      function (error, response, body) {
        const json = JSON.parse(body)
        console.log(json)
      })
} else {
  console.log('error')
}

