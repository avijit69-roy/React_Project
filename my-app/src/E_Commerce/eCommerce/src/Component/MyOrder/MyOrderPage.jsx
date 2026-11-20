import React, { useState, useEffect } from 'react'
import './MyOrderPage.css'
import Table from '../Common/Table'
import { myOrdersAPI } from '../../services/orderServices'

const MyOrderPage = () => {

  const [orders, setOrders] = useState([]);
  // Function to display my orders 

  useEffect(() => {
    displayMyOrders();
  }, []); // Empty dependency array to run only once on component mount


  const displayMyOrders = async () => {
    try {
      const res = await myOrdersAPI();
      setOrders(res.data);
      console.log(res.data);
    } catch (error) {
      toast.error("Failed to fetch my orders.");
    }
  };

  return (
    <>
      <section className="align_center myorder_page">
        {
          orders &&

          <Table headings={["Orders", "Products", "Price", "Status"]}>
            <tbody>
              {

                orders.map((order, index) =>
                  order.products.map((item) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>

                      <td>{item.product.title}</td>

                      <td>${item.product.price.toFixed(2)}</td>

                      <td>{order.status}</td>
                    </tr>
                  ))
                )

              }

            </tbody>

          </Table>
        }
      </section>
    </>
  )
}

export default MyOrderPage







//  return (
//     <>
//      <section className="align_center myorder_page">
//       {
//         orders ? (
//           <Table headings={["Orders","Products","Total","Status"]}>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order._id}</td>
//                   <td>{order.products.map((p) => p.name).join(", ")}</td>
//                   <td>${order.total.toFixed(2)}</td>
//                   <td>{order.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         ) : (
//           <p>No orders found.</p>
//         )
//       }
//      </section>
//     </>
//   )
// }