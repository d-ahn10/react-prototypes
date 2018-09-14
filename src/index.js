import React from 'react';
import ReactDOM from 'react-dom';
import { userInfo } from 'os';

const luckyNumber = () => Math.floor((Math.random() * 1000) + 1);

const greeting = user => (
        <div className="container">
            <h1>Hello {user.name}</h1>
            <h2 className="text-muted">Your lucky number is {user.luckyNumber}</h2>
        </div>
)

const user = {
    name: 'David',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    //<h1 className="container">React Prototypes!</h1>,
    greeting(user),
    document.getElementById('root')
);
