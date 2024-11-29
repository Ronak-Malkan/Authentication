const express = require('express');
const bodyParser = require('body-parser');
const addRoutes = require('./api/addUserRoute');
const updateRoutes = require('./api/updateUserRoute');
const { validateAccessToken } = require('./middleware/authMiddleware');
const { errorHandler } = require('./middleware/errorMiddleWare');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', addRoutes);

app.use(validateAccessToken);

app.use('/api/users', updateRoutes);

app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;