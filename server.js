const express = require('express');

const app = express();

// Serve files from the public directory
app.use(express.static('public'));

// Handle GET requests
app.get('/', (req, res) => {
  res.sendFile('/Users/ajeetsraina/demo/nodejs-sample/index.html');
});

// Handle POST requests
app.post('/post', (req, res) => {
  // Get the POST data
  const data = JSON.parse(req.body);

  // Do something with the POST data
  // ...

  // Send a response to the client
  res.sendStatus(200);
});

// Start the server
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
