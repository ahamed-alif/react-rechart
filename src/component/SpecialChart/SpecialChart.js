import axios from 'axios';
import React, { useEffect,  } from 'react';

const SpecialChart = () => {
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
        })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default SpecialChart;