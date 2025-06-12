import React from 'react'

export default function CartItem(props) {
  return (
    <div>
        <span>{props.product.name}</span>
        <span className={props.product.count === 0? "mx-2 text-yellow" : "mx-3 text-amber-900"} >
             {props.product.count}
        </span>
        <button onClick={()  => props.handleIncrement(props.product.id)} className='btn btn-xs btn-primary'>
            +
        </button>
        <button onClick={() => props.handleDecrement(props.product.id)} className='btn btn-secondary btn-xs'>
            -
        </button>
    </div>
  )
}
