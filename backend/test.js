const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Working!'));
app.listen(3002, () => console.log('Test server on 3002'));
