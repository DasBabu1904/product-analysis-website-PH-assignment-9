import React, { useEffect } from 'react';

function CustomTitle() {
    useEffect(() => {
        document.title = 'Tourist Spot Review';
    }, []);
}
export default CustomTitle;