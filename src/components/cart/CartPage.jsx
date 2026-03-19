import React, { useEffect, useState, useCallback } from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';
import CustomerForm from './CustomerForm';
import PaymentMethod from './PaymentMethod';
import { cartApi } from '../../api/cartApi';

const calculateTotals = (items, discount = 0) => {
  const total = items.reduce((sum, item) => {
    const adultTotal = item.priceAdult * (item.quantity.adult || 0);
    const childTotal = item.priceChild * (item.quantity.child || 0);
    const infantTotal = item.priceInfant * (item.quantity.infant || 0);
    return sum + adultTotal + childTotal + infantTotal;
  }, 0);

  const safeDiscount = Math.min(discount, total);

  return {
    total,
    discount: safeDiscount,
    finalTotal: total - safeDiscount,
  };
};

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [totals, setTotals] = useState({ total: 0, discount: 0, finalTotal: 0 });
  const [loadingCart, setLoadingCart] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [error, setError] = useState('');
  const [voucherError, setVoucherError] = useState('');
  const [orderSuccess, setOrderSuccess] = useState('');

  const [customer, setCustomer] = useState({
    fullName: '',
    phone: '',
    note: '',
  });
  const [customerErrors, setCustomerErrors] = useState({});

  const [paymentMethod, setPaymentMethod] = useState('');

  const fetchCart = useCallback(async () => {
    setLoadingCart(true);
    setError('');
    try {
      const response = await cartApi.getCart();
      const { items: apiItems, total, discount, finalTotal } = response.data;
      setItems(apiItems || []);
      // Ưu tiên tính toán lại để đồng bộ với logic front
      setTotals(
        calculateTotals(apiItems || [], discount ?? 0)
      );
    } catch (err) {
      setError('Không thể tải giỏ hàng. Vui lòng thử lại sau.');
    } finally {
      setLoadingCart(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const recalcTotalsFromItems = useCallback(
    (nextItems, nextDiscount) => {
      setTotals(prev => {
        const discountToUse = typeof nextDiscount === 'number' ? nextDiscount : prev.discount;
        return calculateTotals(nextItems, discountToUse);
      });
    },
    []
  );

  const handleUpdateQuantity = (itemId, type, delta) => {
    setItems(prevItems => {
      const updated = prevItems.map(item => {
        if (item.id !== itemId) return item;
        const newQty = {
          ...item.quantity,
          [type]: Math.max(0, (item.quantity[type] || 0) + delta),
        };
        return { ...item, quantity: newQty };
      });
      recalcTotalsFromItems(updated);
      return updated;
    });
  };

  const handleRemoveItem = (itemId) => {
    setItems(prevItems => {
      const updated = prevItems.filter(item => item.id !== itemId);
      recalcTotalsFromItems(updated);
      return updated;
    });
  };

  const handleApplyVoucher = async (code) => {
    setVoucherError('');
    try {
      const response = await cartApi.applyVoucher(code);
      const newDiscount = response.data?.discount ?? 0;
      setTotals(prev => calculateTotals(items, newDiscount || prev.discount));
    } catch (err) {
      const message = err?.message || 'Áp dụng mã giảm giá thất bại.';
      setVoucherError(message);
      // Ném lại để VoucherInput có thể xử lý nếu cần
      throw err;
    }
  };

  const handleCustomerChange = (field, value) => {
    setCustomer(prev => ({ ...prev, [field]: value }));
    setCustomerErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateCustomer = () => {
    const errors = {};
    if (!customer.fullName.trim()) {
      errors.fullName = 'Vui lòng nhập họ tên.';
    }
    if (!customer.phone.trim()) {
      errors.phone = 'Vui lòng nhập số điện thoại.';
    } else if (!/^(0|\+84)\d{8,10}$/.test(customer.phone.trim())) {
      errors.phone = 'Số điện thoại không hợp lệ.';
    }
    if (!paymentMethod) {
      errors.paymentMethod = 'Vui lòng chọn phương thức thanh toán.';
    }

    setCustomerErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (items.length === 0) {
      setError('Giỏ hàng đang trống, không thể đặt tour.');
      return;
    }

    if (!validateCustomer()) return;

    setOrderLoading(true);
    setError('');
    setOrderSuccess('');

    try {
      const response = await cartApi.placeOrder({
        customer,
        paymentMethod,
        items,
        totals,
      });

      if (response.data?.success) {
        setOrderSuccess(response.data.message || 'Đặt tour thành công!');
      } else {
        setError('Có lỗi xảy ra khi đặt tour. Vui lòng thử lại.');
      }
    } catch (err) {
      setError('Không thể kết nối máy chủ. Vui lòng thử lại sau.');
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Giỏ Hàng</h1>
          <p className="text-sm text-gray-500">
            Kiểm tra lại đơn tour của bạn và hoàn tất thông tin để đặt tour.
          </p>
        </div>

        {/* Error / Success global */}
        {(error || orderSuccess) && (
          <div className="mb-4">
            {error && (
              <div className="mb-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
            {orderSuccess && (
              <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {orderSuccess}
              </div>
            )}
          </div>
        )}

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: Cart list */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-6">
              {loadingCart ? (
                <div className="flex items-center justify-center py-16">
                  <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <CartList
                  items={items}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                />
              )}
            </div>

            {/* Customer info & payment */}
            <div className="space-y-6">
              <CustomerForm
                customer={customer}
                errors={customerErrors}
                onChange={handleCustomerChange}
              />
              <PaymentMethod
                selectedMethod={paymentMethod}
                onChange={setPaymentMethod}
                error={customerErrors.paymentMethod}
              />
            </div>
          </div>

          {/* Right: Summary */}
          <div>
            <CartSummary
              total={totals.total}
              discount={totals.discount}
              finalTotal={totals.finalTotal}
              onApplyVoucher={handleApplyVoucher}
              onOrder={handlePlaceOrder}
              loading={orderLoading}
              voucherError={voucherError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

