const fs = require('fs');
const express = require('express');

app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/', (req, res) => {
  res.send('server says hi');
});

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    tours,
  });
});

app.listen(8000, (req, res) => {
  console.log('server running');
});
