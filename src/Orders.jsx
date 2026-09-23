import React, { useEffect, useState } from "react";
import "./orders.css";
import { db, auth } from "./firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Order from "./Order";

function Orders() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    const ordersRef = collection(db, `users/${user.uid}/orders`);

    const q = query(ordersRef, orderBy("created", "desc"));

    const unsubscribeOrders = onSnapshot(
      q,
      (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        );
      },
      (error) => {
        console.error("Error fetching orders:", error);
      },
    );

    return () => unsubscribeOrders();
  }, [user]);

  console.log("Firebase user:", user);
  console.log("Orders:", orders);

  return (
    <div className="orders">
      <h1>Orders</h1>

      <div className="orders-order">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
