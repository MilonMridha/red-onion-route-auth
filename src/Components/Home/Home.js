import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


import './Home.css'
const Home = () => {
    return (
        <div >
            <div className='box'>
                <h3 className=''>Best food waiting for your belly</h3>
                <input className='rounded-pill mt-2 ms-5' type="text" name="search food" id="" />
                <button className='btn btn-danger rounded-pill'>Search</button>
            </div>

            <div className='mt-5 d-flex justify-content-center'>
                
                    <CustomLink className='text-decoration-none text-dark' to={'breakfast'}>Breakfast</CustomLink>
                    <CustomLink className='text-decoration-none ms-5  text-dark' to={'lunch'}>Lunch</CustomLink>
                    <CustomLink className='text-decoration-none ms-5 text-dark ' to={'dinner'}>Dinner</CustomLink>
                    
            </div>
                <Outlet></Outlet>
        </div>
    );
};

export default Home;