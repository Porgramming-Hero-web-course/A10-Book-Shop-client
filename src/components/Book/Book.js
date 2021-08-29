import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    const {_id, img, name, author, price } = props.book
    return (
        <div className="col-md-3 col-sm-6 col-10 my-3">
           <div className="bg-light h-100 card p-3">
               <Link to={`/buybook/${_id}`}>
                    <img style={{height: "300px", width: '350px'}} className="img-fluid card-img-top" src={img} alt={name}></img>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{author}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className='fw-bolder text-success'>${price}</span>
                    <Link to={`/buybook/${_id}`}><button className='btn btn-primary'>Buy Now</button></Link>
                </div>
           </div>
        </div>
    );
};

export default Book;