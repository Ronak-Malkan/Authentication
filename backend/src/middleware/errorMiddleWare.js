const {
    InvalidTokenError,
    UnauthorizedError,
} = require("express-oauth2-jwt-bearer");

const errorHandler = (error, request, response, next) => {

    if (error instanceof InvalidTokenError) {
        const message = "Bad credentials";

        response.redirect('http://localhost:3000');

        return;
    }

    if (error instanceof UnauthorizedError) {
        const message = "Requires authentication";

        response.redirect('http://localhost:3000');

        return;
    }

    const status = 500;
    const message = "Internal Server Error";

    response.status(status).json({ message });
};

module.exports = {
    errorHandler,
};