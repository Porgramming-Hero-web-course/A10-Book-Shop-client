import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="m-5 p-5">
            <div>
                <Link to='/allorders'>All Order</Link>
            </div>
            <br></br>
            <div>
                <Link to='/addbook'>Add Book</Link>
            </div>
        </div>
    );
};
export default Sidebar;