const db = require('../config/database.js');

exports.addUser = async (req, res) => {
    const { firstName, lastName, email, userType } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO Users (FirstName, LastName, Email, UserType) VALUES ($1, $2, $3, $4) RETURNING *',
            [firstName, lastName, email, userType]
        );
        res.status(201).send(rows[0]);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, userType } = req.body;
    try {
        const { rows } = await db.query(
            'UPDATE Users SET FirstName = $1, LastName = $2, Email = $3, UserType = $4 WHERE UserID = $5 RETURNING *',
            [firstName, lastName, email, userType, id]
        );
        res.status(200).send(rows[0]);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getUser = async (req, res) => {
    res.status(200).send({ message: 'User 1' });
};