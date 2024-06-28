import React, {useState} from 'react';
import * as classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import image from '@/assets/profile.png';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img src={image as string} alt="" />
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.title}>{count}</h1>
            <button className={classes.btn} onClick={decrement}>dec</button>
            <button className={classes.btn} onClick={increment}>inc</button>
            <Outlet />
        </div>
    );
};
