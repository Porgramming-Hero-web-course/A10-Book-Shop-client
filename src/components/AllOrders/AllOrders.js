import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleOrder from '../SingleOrder/SingleOrder';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`https://fast-coast-93402.herokuapp.com/orders/`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Sidebar/>
                </div>
                <div className="col-md-8">
                    <h3 className="m-5 text-center">All Order List</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Book Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map(order => <SingleOrder order={order}></SingleOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;