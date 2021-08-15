import React, { useEffect, useState } from 'react';
// import fakeData from '../fakeData/data.json';
import Book from '../Book/Book';


const AllBook = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        fetch(`https://fast-coast-93402.herokuapp.com/books`)
            .then(res => res.json())
            .then(data => setBookData(data))
    }, [])

    //   const addAllBook = () => {
    //     fetch('https://fast-coast-93402.herokuapp.com/addBooks', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(fakeData)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }

    // <button onClick = { addAllBook } > Add all book</button>


    return (
        <div className='row'>
            {
                bookData.length !== 0 ? (
                    bookData.map(book => <Book book={book}></Book>)
                ) : (
                <div style={{ textAlign: "center" }}>
                <img className="spinner ms-5 mt-5"
                    src="https://c.tenor.com/tnVhpVPq9ZkAAAAi/emojis-emoji.gif" alt=""/>
                </div>
                )}
        </div>
    );
};

export default AllBook;