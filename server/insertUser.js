const mongoose = require('mongoose');
const User = require('./userModel');

mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true });

const newUser = new User({ name: 'Charlie', email: 'charlie@example.com', age: 35 });
newUser.save()
    .then(() => {
        console.log('User inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
