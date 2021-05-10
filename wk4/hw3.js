const request = require('request');
const process = require('process')

const country = process.argv[2]

request(
  'https://restcountries.eu/rest/v2/name/'+process.argv[2],
  function (error, response, body) {
    if (response.statusCode !== 404) {
      const json = JSON.parse(body)
      for (let i = 0; i < json.length; i++) {
        console.log('國家:', json[i].name)
        console.log('首都:', json[i].capital)
        console.log('貨幣:', json[i].currencies[0].code)
        console.log('國碼:', Number(json[i].callingCodes))
        console.log('===============')
      }
    } else {
      console.log('找不到國家資訊')
    }
  })
