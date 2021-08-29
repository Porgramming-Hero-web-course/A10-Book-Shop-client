import React from 'react';
import AllBook from '../AllBook/AllBook';

const Home = () => {
    return (
        <section>
            <div className='mt-4 d-flex justify-content-center'>
                <input className="w-25 form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
            <AllBook></AllBook>
        </section>
    );
};

export default Home;