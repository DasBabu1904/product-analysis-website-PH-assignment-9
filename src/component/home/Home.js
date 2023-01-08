import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
    return (
        <div>
            <h1>This is Home </h1>

            <span className='See-all-button'>
                <Link to="/review"> See All Review</Link>
            </span>

        </div>
    );
};

export default Home;