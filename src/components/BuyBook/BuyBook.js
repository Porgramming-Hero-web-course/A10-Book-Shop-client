import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const BuyBook = () => {
    const { id } = useParams();
    const history = useHistory();
    const [book, setBook] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));
    const [buyBookData, setBuyBookData] = useState({
        userName: user.name,
        email: user.email,
        img: book.img
})



    const handleSubmit = (book) => {
        book.preventDefault();
        if (buyBookData.quantity >= 1) {
            fetch('https://fast-coast-93402.herokuapp.com/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(buyBookData)
            })
                .then(data => {
                    alert('Your order is successfully done')
                    history.replace('/');
                })
        } else {
            alert("Please set a quantity of book")
        }
    }

    const handleQuantityChange = (book) => {
        const newBuyBookData = { ...buyBookData };
        newBuyBookData.quantity = book.target.value;
        setBuyBookData(newBuyBookData);
    }

    useEffect(() => {
        fetch(`https://fast-coast-93402.herokuapp.com/book/${id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
                const newBuyBookData = {...buyBookData}
                newBuyBookData.bookName = data.name
                newBuyBookData.bookPrice = data.price
                newBuyBookData.img = data.img;
                newBuyBookData.author = data.author;
                setBuyBookData(newBuyBookData);
            })
    }, [id])

    return (
        <div className='container'>
            <div className=" container justify-content-center">
                <h3 className='text-center'>Order Book Now</h3>
                <form className=" bg-light p-5 m-5" onSubmit={handleSubmit}>
                    <h5>Book Name: {book.name}</h5>
                    <br></br>
                    <p>Price: ${book.price}</p>
                    <input type="number" name="quantity" placeholder="Quantity" onChange={handleQuantityChange}></input>
                    <br></br>
                    <button className="btn btn-primary mt-2">Order Now</button>
                </form>
            </div>
        </div>
    );
};

export default BuyBook;