'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/me', (req, res) => {
    res.send('dicoding_Silmi Rahmadina\n');
});

app.get('/', (req, res) => {
    res.send('dicoding_Silmi Rahmadina\n');
});

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/

app.listen(8000, () => {
console.log(`Running on http://localhost:8000`);
});
