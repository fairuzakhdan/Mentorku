export const loadMidtransScript = () => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('midtrans-script')) return resolve();

    const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.id = 'midtrans-script';
    script.setAttribute('data-client-key', 'SB-Mid-client-_eaCt439qoCFC2kU');
    script.async = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Gagal memuat Midtrans Snap.js'));

    document.body.appendChild(script);
  });
};

// Menangani proses pembayaran dengan token Snap
export const handleSnapPayment = (token, onSuccessNavigate) => {
  if (!token || typeof window.snap === 'undefined') {
    alert('Token atau Snap belum tersedia.');
    return;
  }

  window.snap.pay(token, {
    onSuccess: (result) => {
      console.log('Pembayaran sukses:', result);
      alert('Pembayaran berhasil!');
      onSuccessNavigate();
    },
    onPending: (result) => {
      console.log('Pembayaran tertunda:', result);
    },
    onError: (result) => {
      console.error('Pembayaran gagal:', result);
    },
    onClose: () => {
      console.warn('Popup ditutup tanpa menyelesaikan pembayaran');
    },
  });
};

export const requestSnapToken = async (mentorId, paymentData) => {
  const res = await fetch(`http://localhost:3000/api/mentors/${mentorId}/payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentData),
  });

  if (!res.ok) {
    const errMsg = await res.text();
    throw new Error(`Gagal membuat pembayaran: ${errMsg}`);
  }

  return res.json(); // Berisi token dan data pembayaran
};
