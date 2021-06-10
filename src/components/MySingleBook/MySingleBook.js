import React from 'react';
import { useHistory } from 'react-router';

const MySingleBook = (props) => {
    const {_id, userName, bookName, bookPrice, quantity, img} = props.book;
    const history = useHistory();
    
    const handleDelete = () => {
        fetch(`https://fast-coast-93402.herokuapp.com/deleteOrder/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json)
            .then(data => {
                alert('Your Order is Successfully Deleted')
                history.replace('/')
            })
    }
    return (
        <div className='col-md-4'>
            <div className="text-center shadow h-100 p-3 m-3">
                <div>
                    <img className="img-fluid w-50" src={img} alt=''></img>
                </div>
                <div className="">
                    <h4>Name: {userName}</h4>
                    <h5>{bookName}</h5>
                    <span>Price: {bookPrice}</span>
                    <p>Quantity: {quantity}</p>
                    <button onClick={handleDelete} className='btn btn-danger'>Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleBook;