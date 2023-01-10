import React from 'react';
import Card from '../Card/Card';
import './Review.css'
const Review = (props) => {
    const sites = props.sites
    return (
        <div>

            <div className='review-sec'>
                {sites.map(site => <Card site={site} key={site._id}></Card>)}
            </div>
        </div>
    );
};

export default Review;