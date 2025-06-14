import React from 'react'
import CartItem from './CartItem';

export default function Cart({ products, handleIncrement, handleDecrement, handleReset }) {
  const cartProducts = products.filter(p => p.isInCart);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
      {cartProducts.length === 0 ? (
        <div className="text-center text-gray-400 py-10">
          <span className="text-4xl block mb-2">🛒</span>
          <span className="text-lg">Your cart is empty</span>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartProducts.map(p => (
              <CartItem product={p} handleIncrement={handleIncrement} handleDecrement={handleDecrement} key={p.id} />
            ))}
          </div>
          <div className="flex justify-end">
            <button onClick={handleReset} className="btn btn-error btn-sm">Reset Cart</button>
          </div>
        </>
      )}
    </div>
  )
}
