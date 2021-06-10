import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {

    const {_id, img, name, author, price } = props.book
    return (
        <div className="col-md-4 col-sm-6 col-10 mb-5">
            <div className="bg-light card w-75 h-100 p-2 justify-content-center shadow rounded">
                <Link to={`/buybook/${_id}`}>
                    <img className="img-fluid w-50" src={img} alt=""></img>
                </Link>
                <div className="h-25 p-3">
                    <h5>{name}</h5>
                    <p>{author}</p>
                </div>
                <div className='d-flex p-3 justify-content-between'>
                    <span className='fw-bolder text-success'>${price}</span>
                    <Link to={`/buybook/${_id}`}><button className='btn btn-primary mb-4'>Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Book;