import React, { useState } from 'react';

export default function Menu({ products, onAddToCart, selectedCategory, handleSelectCategory, categories }) {
  const categoryOptions = [{ id: 0, name: 'All' }, ...categories];

  const [search, setSearch] = useState('');
  const handleSearchChange = (e) => {
    // clone
    let newSearch = e.target.value;
    // edit
    // set state
    setSearch(newSearch);
  };

  let filteredProducts = selectedCategory === 0
    ? products
    : products.filter(p => p.categoryId === selectedCategory);

  if (search.trim() !== '') {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  }

  return (
    <div className="flex gap-8 p-6">
      <div>
        <div className="border rounded-lg w-48 bg-base-100 shadow">
          {categoryOptions.map(cat => (
            <div
              key={cat.id}
              className={`p-3  cursor-pointer border-b last:border-b-0 rounded-lg ${selectedCategory === cat.id ? 'bg-neutral text-neutral-content' : 'hover:bg-base-200'}`}
              onClick={() => handleSelectCategory(cat.id)}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-end mb-4">
          <input
            type="text"
            className="input input-bordered input-sm w-full max-w-xs"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}$</td>
                  <td>
                    <button
                      className="cursor-pointer"
                      onClick={() => onAddToCart(product.id)}
                    >
                      {product.isInCart ? <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                      }
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
