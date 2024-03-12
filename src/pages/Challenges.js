import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Challenges = () => {
    return (
        <div>
            <Header />
            <nav>
                <ul>
                    <li>
                    <a href="/App">Home</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Challenges;