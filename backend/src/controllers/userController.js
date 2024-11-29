const db = require('../config/database.js');
const { v4: uuidv4 } = require('uuid');

exports.addUser = async (req, res) => {
    const { given_name, family_name, email} = req.body;
    const { rows: existingUser } = await db.query(
        'SELECT * FROM Users WHERE Email = $1',
        [email]
    );

    if (existingUser.length > 0) {
        return res.status(200).send({ newUser: false });
    }

    try {
        const { rows } = await db.query(
            'INSERT INTO Users (FirstName, LastName, Email) VALUES ($1, $2, $3) RETURNING *',
            [given_name, family_name, email]
        );
        res.status(201).send({data: rows[0], newUser: true});
    } catch (error) {
        console.log(error);
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