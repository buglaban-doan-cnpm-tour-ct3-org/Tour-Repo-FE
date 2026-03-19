import React, { useState } from 'react';

const VoucherInput = ({ onApply, error }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    if (!code.trim() || loading) return;
    try {
      setLoading(true);
      await onApply(code.trim().toUpperCase());
      setCode('');
    } catch {
      // Error được hiển thị từ component cha thông qua prop `error`
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Mã giảm giá
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Nhập mã giảm giá..."
          className={`flex-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none uppercase transition ${
            error ? 'border-red-400' : 'border-gray-300'
          }`}
        />
        <button
          type="button"
          onClick={handleApply}
          disabled={loading || !code.trim()}
          className="flex-shrink-0 bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-medium transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Đang xét...' : 'Áp dụng'}
        </button>
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default VoucherInput;
