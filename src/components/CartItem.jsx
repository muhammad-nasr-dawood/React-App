import React from 'react'

export default function CartItem(props) {
  const { product, handleIncrement, handleDecrement } = props;
  return (
    <div className="flex items-center justify-between bg-base-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <span className="font-semibold text-lg">{product.name}</span>
        <span className={`badge badge-lg ${product.count === 0 ? 'badge-warning' : 'badge-primary'}`}>{product.count}</span>
      </div>
      <div className="flex gap-2">
        <button onClick={() => handleIncrement(product.id)} className="btn btn-primary btn-sm">
          +
        </button>
        <button onClick={() => handleDecrement(product.id)} className="btn btn-secondary btn-sm">
          -
        </button>
      </div>
    </div>
  )
}
