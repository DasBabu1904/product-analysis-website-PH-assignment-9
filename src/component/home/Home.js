import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
    return (
        <div>
            <h1>Welcome To Our Tourist Spot Review Website</h1>
            <container className="site-intro">

                <p className='site-intro-paragraph'>Here you can find details about many places. So that you can choose where to go in following  holyday. If traveling is your hobby then this site is for you this will help you a lot about gathering knowledge about the world wide tourist spots. In addition you will get a lot of information how people enjoyed about this places</p>

                <img className='picture-size' src="./picture/10.jpg" alt="No" srcset="" />

            </container>
            <span >
                <Link className='See-all-button' to="/review"> See All Review</Link>
            </span>

        </div >
    );
};

export default Home;