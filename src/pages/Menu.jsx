import React, { useState } from 'react';

export default function Menu({ products, onAddToCart, selectedCategory, handleSelectCategory, categories }) {
  // Category filter logic using categoryId foreign key
  const categoryOptions = [{ id: 0, name: 'All' }, ...categories];

  // Search state
  const [search, setSearch] = useState('');
  const handleSearchChange = (e) => {
    // clone
    let newSearch = e.target.value;
    // edit (if needed)
    // set state
    setSearch(newSearch);
  };

  // Filter products by selected category (0 means All)
  let filteredProducts = selectedCategory === 0
    ? products
    : products.filter(p => p.categoryId === selectedCategory);

  // Further filter by search
  if (search.trim() !== '') {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  }

  return (
    <div className="flex gap-8 p-6">
      {/* Category Sidebar */}
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
      {/* Products Table */}
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
                      className="btn btn-sm btn-primary"
                      onClick={() => onAddToCart(product.id)}
                      disabled={product.isInCart}
                    >
                      {product.isInCart ? 'In Cart' : <span role="img" aria-label="cart">🛒</span>}
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
