import React from 'react';
import AllBook from '../AllBook/AllBook';

const Home = () => {
    return (
        <div className='App container justify-content-center'>
            <form className="d-flex mb-5 w-50">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <AllBook></AllBook>
        </div>
    );
};

export default Home;