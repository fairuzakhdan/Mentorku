// const handlePay = async () => {
//   try {
//     const response = await fetch('/api/payment/create-transaction', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         order_id: 'ORDER-' + Date.now(),
//         gross_amount: 100000,
//         customer_name: 'John Doe',
//         email: 'john@example.com',
//       }),
//     });

//     const text = await response.text(); // ambil responsenya sebagai string dulu
//     console.log('Raw response:', text);

//     const data = JSON.parse(text); // parse manual
//     if (window.snap) {
//       window.snap.pay(data.token, {
//         onSuccess: function (result) {
//           alert('Pembayaran sukses!');
//           console.log(result);
//         },
//         onPending: function (result) {
//           alert('Pembayaran pending.');
//           console.log(result);
//         },
//         onError: function (result) {
//           alert('Pembayaran gagal.');
//           console.log(result);
//         },
//         onClose: function () {
//           alert('Pembayaran belum diselesaikan.');
//         },
//       });
//     } else {
//       alert('Snap.js belum dimuat.');
//     }
//   } catch (error) {
//     console.error('Terjadi kesalahan:', error);
//   }
// };

// export default handlePay;
