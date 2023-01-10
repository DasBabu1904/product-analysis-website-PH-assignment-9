import React, { useEffect, useState } from 'react';
import { Await, Link } from 'react-router-dom';
import GetTravelSite from '../../hooks/getTravelSite';
import Card from '../Card/Card';
import "./Home.css";
const Home = ({ sites }) => {

    console.log(sites)
    const [homeView, setHomeView] = useState([]);

    useEffect(() => {
        const three = []
        if (sites.length > 3) {
            for (let i = 0; i < 3; i++) {
                three.push(sites[i])
            }
        }
        setHomeView(three)
    }, [sites])

    return (
        <div>
            <h1 className='Welcome-header'>Welcome To Our Tourist Spot Review Website</h1>
            <container className="site-intro">

                <p className='site-intro-paragraph'>Here you can find details about many places. So that you can choose where to go in following  holyday. If traveling is your hobby then this site is for you this will help you a lot about gathering knowledge about the world wide tourist spots. In addition you will get a lot of information how people enjoyed about this places</p>

                <img className='picture-size' src="./picture/10.jpg" alt="No" srcset="" />

            </container>

            <div className='home-view'>
                {homeView.map(site => <Card site={site} key={site._id}></Card>)}
            </div>
            <div>
                <span >
                    <Link className='See-all-button' to="/review" sites={sites}> See All Review</Link>
                </span>
            </div>
            <footer className='footer-style'>
                <h3>This website is designed by Sourav Das</h3>
                <p>© Sourav Das Suvro</p>
            </footer>
        </div >
    );
};

export default Home;