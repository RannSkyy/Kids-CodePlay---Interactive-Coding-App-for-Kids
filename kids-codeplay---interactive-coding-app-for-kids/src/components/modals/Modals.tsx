import React, { useState } from 'react';
import { PricingPlan } from '../../types';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 text-3xl mx-auto flex items-center justify-center mb-3">
            📲
          </div>
          <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading">
            Unduh Kids-CodePlay
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Mulai petualangan belajar coding si kecil di tablet atau smartphone sekarang.
          </p>
        </div>

        {/* QR Code Placeholder Box */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center mb-6">
          <div className="w-32 h-32 bg-white p-2 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center mb-2">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" fill="currentColor">
              {/* Decorative QR code matrix */}
              <rect x="10" y="10" width="24" height="24" />
              <rect x="14" y="14" width="16" height="16" fill="white" />
              <rect x="18" y="18" width="8" height="8" />

              <rect x="66" y="10" width="24" height="24" />
              <rect x="70" y="14" width="16" height="16" fill="white" />
              <rect x="74" y="18" width="8" height="8" />

              <rect x="10" y="66" width="24" height="24" />
              <rect x="14" y="70" width="16" height="16" fill="white" />
              <rect x="18" y="74" width="8" height="8" />

              <rect x="42" y="14" width="6" height="18" />
              <rect x="52" y="20" width="8" height="6" />
              <rect x="42" y="42" width="16" height="16" />
              <rect x="64" y="44" width="8" height="8" />
              <rect x="44" y="68" width="14" height="8" />
              <rect x="70" y="70" width="18" height="14" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-slate-500">
            Pindai dengan kamera HP / Tablet untuk unduh langsung
          </span>
        </div>

        {/* Store buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              alert('Mengalihkan ke Apple App Store...');
              onClose();
            }}
            type="button"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            <i className="fa-brands fa-apple text-base" />
            <span>App Store</span>
          </button>

          <button
            onClick={() => {
              alert('Mengalihkan ke Google Play Store...');
              onClose();
            }}
            type="button"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            <i className="fa-brands fa-google-play text-base" />
            <span>Google Play</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [activated, setActivated] = useState(false);

  if (!isOpen) return null;

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim()) {
      alert('Harap lengkapi nama dan nomor HP.');
      return;
    }
    setActivated(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm" />
        </button>

        {activated ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl mx-auto flex items-center justify-center mb-3">
              🎉
            </div>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading mb-2">
              Uji Coba 14 Hari Aktif!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Kode aktivasi akun telah dikirimkan ke <strong>{phone}</strong>. Selamat menikmati
              seluruh 500+ quest bersama si kecil!
            </p>
            <button
              onClick={onClose}
              type="button"
              className="w-full py-3 bg-[#4C8BF5] text-white font-extrabold text-xs rounded-xl hover:bg-[#3B7BE8] cursor-pointer"
            >
              Mulai Petualangan
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
                14 Hari Gratis Tanpa Kartu Kredit
              </span>
              <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading mt-2">
                Coba Kids-CodePlay VIP
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Akses semua level kurikulum, tanpa syarat pembayaran di muka.
              </p>
            </div>

            <form onSubmit={handleActivate} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Nama Ayah / Bunda
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Bunda Siti"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  type="tel"
                  placeholder="081234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#4C8BF5] hover:bg-[#3B7BE8] text-white font-extrabold text-sm rounded-full shadow-md transition-all cursor-pointer"
              >
                Aktifkan Sekarang (Gratis)
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface CheckoutModalProps {
  isOpen: boolean;
  plan: PricingPlan | null;
  isAnnual: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  plan,
  isAnnual,
  onClose,
}) => {
  const [step, setStep] = useState<'review' | 'success'>('review');

  if (!isOpen || !plan) return null;

  const price = isAnnual ? plan.priceAnnually : plan.priceMonthly;

  const handlePay = () => {
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm" />
        </button>

        {step === 'success' ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl mx-auto flex items-center justify-center mb-3">
              ✓
            </div>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading mb-2">
              Langganan Berhasil!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Paket <strong>{plan.name}</strong> Anda telah aktif. Buka aplikasi di HP/tablet Anda
              untuk langsung menikmati quest tanpa batas!
            </p>
            <button
              onClick={() => {
                setStep('review');
                onClose();
              }}
              type="button"
              className="w-full py-3 bg-[#4C8BF5] text-white font-extrabold text-xs rounded-xl hover:bg-[#3B7BE8] cursor-pointer"
            >
              Selesai & Tutup
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-extrabold text-[#1E293B] font-heading mb-1">
              Ringkasan Pesanan
            </h3>
            <p className="text-slate-500 text-xs mb-5">Periksa detail paket yang Anda pilih</p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">{plan.name}</span>
                <span className="text-sm font-extrabold text-blue-600">
                  {price === 0 ? 'Gratis' : `Rp ${price.toLocaleString('id-ID')}/bln`}
                </span>
              </div>
              <p className="text-xs text-slate-500">{plan.description}</p>
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Skema Pembayaran</span>
                <span>{isAnnual ? 'Tahunan (Hemat 20%)' : 'Bulanan'}</span>
              </div>
            </div>

            <button
              onClick={handlePay}
              type="button"
              className="w-full py-3.5 bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 text-white font-extrabold text-sm rounded-full shadow-lg shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Konfirmasi & Mulai Belajar</span>
              <i className="fa-solid fa-arrow-right text-xs" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
