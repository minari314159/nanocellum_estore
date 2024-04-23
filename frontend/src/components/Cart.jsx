import { useState, useEffect } from 'react';


const Cart = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    api.get('/api/order/')
      .then(response => {
        setOrderItems(response.data);
        calculateTotalPrice(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const removeFromCart = (id) => {
    api.delete(`/api/order/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        setOrderItems(orderItems.filter(item => item.id !== id));
        calculateTotalPrice(orderItems.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error removing item from cart:', error);
      });
  };

    const calculateTotalPrice = (items) => {
        const total = items.reduce((acc, item) => {
        return acc + (item.product_price * item.quantity);
        }, 0);
        setTotalPrice(total);
    };
  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-2'>
        {orderItems.map(item => (
          <li key={item.id}>
            {item.product_name} - ${item.product_price} - {item.quantity}
            <button className="bg-red-300 rounded-2xl mx-2 p-2 hover:bg-amber-400 text-[12px]"onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default Cart;