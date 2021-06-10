import React from 'react';
import { useHistory } from 'react-router';

const SingleOrder = (props) => {
    const { _id, userName, quantity, email, bookPrice, bookName} = props.order;
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
            <tr>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{bookName}</td>
                <td>{bookPrice}</td>
                <td>{quantity}</td>
                <td><button onClick={handleDelete} className='btn btn-danger'>Delete</button></td>
            </tr>
    );
};

export default SingleOrder;