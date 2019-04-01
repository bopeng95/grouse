const express = require('express');
const app = express();
const api = require('./routes/api');
const cors = require('cors');

app.use(cors());
app.use('/api', api);

app.listen(3000, () => console.log('Listening on port 3000'));
