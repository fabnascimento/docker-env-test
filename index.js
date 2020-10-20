const express = require('express');
// starts express configuration
app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'failed';

app.listen(PORT, () => {
    console.log(`Hello! we are running in the port ${PORT} and apparently in the ${ENV} enviroment`);
});

