const express = require('express');
const e = express();

/**
 * Routes
 */
e.use(express.static('dist'));

/**
 * Listen
 */
const PORT = process.env.PORT || 8080;
e.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
