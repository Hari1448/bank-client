

import React, { useState, useContext } from "react";

import axios from 'axios';

export default function Register() {
    
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    function handleSubmit(e) {
        e.preventDefault();


        let item = { name: Name, email: Email, password: pass, amount: 1000 };
        axios.post('https://bank-server-ga0l.onrender.com/create',item)
        alert("Submitted Sucessfully");
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}