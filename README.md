# corn_local
A simple js script for call API in interval time.

# Update Config section
```
const INTERVAL = 15// in second
const HOST = 'localhost'
const PORT = 8080
const PATH = '/my-path'
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Signature': '1:1'

} // add more if requried.
```
# To run
```
node index.js
```
