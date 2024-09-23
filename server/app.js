const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./model');

app.get('/users', (req, res) => {
    const users = [
        { name: 'Alice', email: 'alice@example.com', age: 25 },
        { name: 'Bob', email: 'bob@example.com', age: 30 }
    ];
    res.json(users);
});

app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000/');
});




mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/user/:email', (req, res) => {
    const email = req.params.email;
    User.findOne({ email }, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send('User not found');
        res.json(user);
    });
});
