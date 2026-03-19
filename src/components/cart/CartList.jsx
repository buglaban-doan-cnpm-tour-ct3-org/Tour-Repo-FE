import React from 'react';
import CartItem from './CartItem';

const CartList = ({ items, onUpdateQuantity, onRemoveItem }) => {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p className="text-gray-500 text-lg">Giỏ hàng của bạn đang trống</p>
        <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
          Khám phá tour ngay
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Danh sách tour ({items.length})</h2>
      <div className="space-y-4">
        {items.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
