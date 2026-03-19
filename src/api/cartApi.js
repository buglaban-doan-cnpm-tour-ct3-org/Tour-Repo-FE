import axios from 'axios';

// Giả lập base URL
// const API_URL = 'http://localhost:5000/api';

export const cartApi = {
  // GET /api/cart
  getCart: async () => {
    // Để mock, chúng ta trả về một Promise mô phỏng độ trễ mạng
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            items: [
              {
                id: 1,
                title: "Tour Châu Âu Đón Noel Đặc Biệt (Pháp - Thụy Sĩ - Ý)",
                duration: "11N10Đ",
                departure: "TP.HCM",
                priceAdult: 10000000,
                priceChild: 7990000,
                priceInfant: 5990000,
                quantity: {
                  adult: 1,
                  child: 0,
                  infant: 0
                },
                image: "https://images.unsplash.com/photo-1549144421-4d3714243eb0?q=80&w=600&auto=format&fit=crop"
              },
              {
                id: 2,
                title: "Khám Phá Hàn Quốc Mùa Lá Đỏ",
                duration: "5N4Đ",
                departure: "Hà Nội",
                priceAdult: 8500000,
                priceChild: 6500000,
                priceInfant: 2000000,
                quantity: {
                  adult: 2,
                  child: 1,
                  infant: 0
                },
                image: "https://images.unsplash.com/photo-1538681143894-37fbe4f6fa38?q=80&w=600&auto=format&fit=crop"
              }
            ],
            total: 33500000,
            discount: 0,
            finalTotal: 33500000
          }
        });
      }, 800);
    });
  },

  // POST /api/cart/apply-voucher
  applyVoucher: async (code) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (code.toUpperCase() === 'DISCOUNT10') {
          resolve({ data: { discount: 1000000 } });
        } else {
          reject(new Error('Mã giảm giá không hợp lệ hoặc đã hết hạn'));
        }
      }, 500);
    });
  },

  // POST /api/order
  placeOrder: async (orderData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          data: { 
            success: true, 
            message: 'Đặt tour thành công!', 
            orderId: 'ORD-' + Math.floor(Math.random() * 100000) 
          } 
        });
      }, 1200);
    });
  }
};
