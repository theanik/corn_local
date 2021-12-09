const http = require('http')

// ------- Config section -------
const INTERVAL = 15// in second
const HOST = 'localhost'
const PORT = 8080
const PATH = '/my-path'
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Signature': '1:1'

} // add more if requried.
// -------End Config section -------

var count = 0
const makeCall = () => {
  const options = {
      host: HOST,
      port: PORT,
      path: PATH,
      method: 'GET',
      headers: HEADERS
  };
  const client = http.request(options,function(res){
    count++
    console.log(`Total Call  --- ${count}`);
    console.log(`Status --- ${res.statusCode}`);
    if (res.data) {
        console.log(res.data)
    }
  });
  client.end();
}

/**
 * second to mili second covert
 * @param int second 
 * @returns int
 */
const secondToMiliSecond = (second) => {
    return second * 1000;
}

// Interval section
makeCall()
setInterval(() => {
  makeCall()
}, secondToMiliSecond(INTERVAL));


