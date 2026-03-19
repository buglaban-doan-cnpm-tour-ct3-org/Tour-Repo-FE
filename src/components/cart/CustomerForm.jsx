import React from 'react';

const CustomerForm = ({ customer, errors, onChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Thông Tin Khách Hàng</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={customer.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            placeholder="Nhập họ và tên"
            className={`w-full border rounded-lg px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition ${
              errors.fullName ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={customer.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="Nhập số điện thoại"
            className={`w-full border rounded-lg px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition ${
              errors.phone ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ghi chú
        </label>
        <textarea
          rows={3}
          value={customer.note}
          onChange={(e) => onChange('note', e.target.value)}
          placeholder="Nhập yêu cầu thêm (nếu có)"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition resize-none"
        />
      </div>
    </div>
  );
};

export default CustomerForm;

