import React, { useEffect, useState } from 'react';
import MySingleBook from '../MySingleBook/MySingleBook';

const MyBooks = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        fetch(`https://fast-coast-93402.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setMyBooks(data))
    }, [user.email])


    return (
        <div className='container'>
            <div className='row'>
                {
                    myBooks.map(book => <MySingleBook book={book}></MySingleBook>)
                }
            </div>
        </div>
    );
};

export default MyBooks;