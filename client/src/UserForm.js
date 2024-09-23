import React, { useState } from 'react';

const UserForm = () => {
    const [user, setUser] = useState({ name: '', email: '', age: '' });
    const [submittedUser, setSubmittedUser] = useState(null);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => setSubmittedUser(data));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
                <input name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                <input name="age" placeholder="Age" value={user.age} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            {submittedUser && <div>User Added: {submittedUser.name}</div>}
        </div>
    );
};

export default UserForm;
