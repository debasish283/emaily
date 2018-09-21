const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);


const port = process.env.PORT || 5001;
app.listen(port)
