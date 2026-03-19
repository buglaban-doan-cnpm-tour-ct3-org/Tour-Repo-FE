import React from 'react';
import VoucherInput from './VoucherInput';

const CartSummary = ({
  total,
  discount,
  finalTotal,
  onApplyVoucher,
  onOrder,
  loading,
  voucherError,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Tóm tắt đơn hàng</h2>
      
      {/* Tạm tính & Giảm giá */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Tổng tiền (tạm tính)</span>
          <span className="font-medium text-lg">{total.toLocaleString()}đ</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Giảm giá</span>
            <span className="font-medium text-lg">- {discount.toLocaleString()}đ</span>
          </div>
        )}
      </div>

      {/* Thành tiền */}
      <div className="border-t border-gray-200 pt-5 mb-6">
        <div className="flex justify-between items-end">
          <span className="text-gray-800 font-bold text-lg">Thành tiền</span>
          <span className="text-3xl font-bold text-purple-600">{finalTotal.toLocaleString()}đ</span>
        </div>
        <p className="text-xs text-gray-500 text-right mt-1">(Đã bao gồm VAT, theo quy định)</p>
      </div>

      {/* Input Voucher */}
      <div className="mb-6">
        <VoucherInput onApply={onApplyVoucher} error={voucherError} />
      </div>

      {/* Nút thanh toán */}
      <button
        onClick={onOrder}
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3.5 rounded-lg font-bold text-lg transition shadow-lg shadow-purple-600/30 active:scale-[0.98] disabled:bg-purple-400 disabled:shadow-none flex justify-center items-center"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Đang xử lý...
          </span>
        ) : 'Thanh Toán Ngay'}
      </button>
      
      {/* Policy */}
      <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
        Bằng việc tiến hành thanh toán, bạn đồng ý với các <a href="#" className="text-purple-600 underline">Điều khoản dịch vụ</a> và <a href="#" className="text-purple-600 underline">Chính sách hủy tour</a> của chúng tôi.
      </p>
    </div>
  );
};

export default CartSummary;
