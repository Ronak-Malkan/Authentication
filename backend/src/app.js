const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./api/userRoutes');
const { validateAccessToken } = require('./middleware/authMiddleware');
const { errorHandler } = require('./middleware/errorMiddleWare');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use Auth middleware on all routes
app.use(validateAccessToken);

// Routes
app.use('/api/users', userRoutes);

app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;