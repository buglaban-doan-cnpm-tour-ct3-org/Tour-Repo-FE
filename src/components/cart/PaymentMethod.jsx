import React from 'react';

const methods = [
  {
    id: 'pay_on_tour',
    label: 'Thanh toán tiền mặt khi đi tour',
    description: 'Thanh toán trực tiếp cho hướng dẫn viên vào ngày khởi hành.',
  },
  {
    id: 'e_wallet',
    label: 'Ví điện tử',
    description: 'Hỗ trợ các ví phổ biến như MoMo, ZaloPay...',
  },
  {
    id: 'bank_transfer',
    label: 'Chuyển khoản ngân hàng',
    description: 'Chuyển khoản trước để giữ chỗ tour.',
  },
];

const PaymentMethod = ({ selectedMethod, onChange, error }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Chọn phương thức thanh toán</h2>

      <div className="space-y-3">
        {methods.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => onChange(method.id)}
            className={`w-full flex items-start gap-3 border rounded-lg px-4 py-3 text-left transition ${
              selectedMethod === method.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
            }`}
          >
            <span
              className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center ${
                selectedMethod === method.id
                  ? 'border-purple-600 bg-purple-600'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {selectedMethod === method.id && (
                <span className="w-2 h-2 rounded-full bg-white" />
              )}
            </span>
            <div>
              <p className="text-sm md:text-base font-medium text-gray-800">
                {method.label}
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                {method.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-500">{error}</p>
      )}

      {selectedMethod === 'bank_transfer' && (
        <div className="mt-5 border-t border-dashed border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Thông tin chuyển khoản
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-medium">Ngân hàng:</span> Vietcombank
            </p>
            <p>
              <span className="font-medium">Số tài khoản:</span> 0123456789
            </p>
            <p>
              <span className="font-medium">Chủ tài khoản:</span> Công Ty Du Lịch 28 Travel
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Nội dung chuyển khoản: <span className="font-medium">[Họ tên] - [Mã tour]</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;

