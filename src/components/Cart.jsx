import React, { useState } from 'react'
import CartItem from './CartItem';

export default function Cart() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Burger', price: 5.99, count: 0 },
        { id: 2, name: 'Fries', price: 2.99, count: 0 },
        { id: 3, name: 'Soda', price: 1.99, count: 0 },
    ]) ;

    const handleReset = () => {
        // clone 
        let newProducts = [...products];
        // edit
        newProducts = newProducts.map(p => {
            return { ...p, count: 0 };
        });
        // set state
        setProducts(newProducts);
    }

    const handleIncrement = (id) => {
        // clone
        let newProducts = [...products];
        // edit
        newProducts = newProducts.map(p => {
            if (p.id === id) {
                return { ...p, count: p.count + 1 }; // this for cloining the object itself
            }
            return p;
        });
        // set state
        setProducts(newProducts);
    }

    const handleDecrement = (id) => {
        // clone
        let newProducts = [...products];
        // edit
        newProducts = newProducts.map(p => {
            if (p.id === id) {
                return { ...p, count: p.count > 0 ? p.count - 1 : 0 };
            }
            return p;
        });
        // set state
        setProducts(newProducts);
    }
  return (
    <div>
        {products.map(p => (
            <CartItem product={p} handleIncrement={handleIncrement} handleDecrement={handleDecrement} key={p.id} />
        ))}
        <button onClick={handleReset} className='btn btn-xs'>Reset Cart</button>
    </div>
  )
}
