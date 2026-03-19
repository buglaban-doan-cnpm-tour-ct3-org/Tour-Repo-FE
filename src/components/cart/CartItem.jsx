import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const handleQuantityChange = (type, value) => {
    // Không cho phép số lượng nhỏ hơn 0
    if (item.quantity[type] + value < 0) return;
    onUpdateQuantity(item.id, type, value);
  };

  const QuantityControl = ({ label, type, price }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
      <div className="text-left">
        <span className="text-gray-700 block text-sm">{label}</span>
        <span className="text-sm text-purple-600 font-medium">{price.toLocaleString()}đ</span>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => handleQuantityChange(type, -1)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
          disabled={item.quantity[type] === 0}
        >
          -
        </button>
        <span className="w-5 text-center text-sm font-medium">{item.quantity[type]}</span>
        <button 
          onClick={() => handleQuantityChange(type, 1)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4 mb-4">
      {/* Cột Trái: Ảnh */}
      <div className="w-full md:w-48 h-32 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover rounded-lg" 
        />
      </div>

      {/* Cột Phải: Nội dung */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 pr-4">{item.title}</h3>
          <button 
            onClick={() => onRemoveItem(item.id)}
            className="text-red-500 hover:text-red-700 p-1 flex-shrink-0"
            title="Xóa khỏi giỏ hàng"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-4">
          <span>⏱ {item.duration}</span>
          <span>📍 {item.departure}</span>
        </p>
        
        <div className="bg-gray-50 rounded-lg p-3 mt-auto w-full md:w-3/4">
          <QuantityControl label="Người lớn" type="adult" price={item.priceAdult} />
          <QuantityControl label="Trẻ em (5-11t)" type="child" price={item.priceChild} />
          <QuantityControl label="Em bé (<5t)" type="infant" price={item.priceInfant} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
