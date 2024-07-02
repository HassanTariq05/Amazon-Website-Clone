import React, { useEffect, useState } from 'react'
import "./orders.css"
import { db } from './firebase';
import { doc, collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Order from './Order';

function Orders() {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ordersRef = collection(db, `users/${user?.uid}/orders`);
        const q = query(ordersRef, orderBy("created", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        });

        return () => unsubscribe();
    }, [user]);
    console.log('Orders: ',orders);

    return (
        <div className='orders'>
            <h1>Orders</h1>
            <div className="orders-order">
                {orders?.map(order => {
                    <Order order={order} />
                })}
            </div>
        </div>
    );
}

export default Orders;
