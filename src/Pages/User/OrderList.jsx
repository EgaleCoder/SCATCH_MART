import React, { useEffect } from 'react';
import Navbar from '../../Components/Home/Navbar';
import Footer from '../../Components/Home/Footer';
import OrderList from '../../Components/User/OrderList';



const OrderListPage = () => {

    return (
        <>
            <Navbar />
            <OrderList />
            <Footer />
        </>
    );
};


export default OrderListPage;