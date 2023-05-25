const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

// Import routes
const routes = require('./routes');

app.use(bodyParser.json());
app.use(cors());


// Set up basic routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/api', routes);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
