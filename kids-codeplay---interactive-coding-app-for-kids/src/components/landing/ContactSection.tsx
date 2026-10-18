import React, { useState } from 'react';
import { ContactFormData } from '../../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    parentName: '',
    email: '',
    phone: '',
    childAge: '5-7',
    interest: 'trial',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.parentName.trim()) {
      errs.parentName = 'Nama orang tua/wali wajib diisi.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format alamat email tidak valid.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Nomor telepon/WhatsApp wajib diisi.';
    } else if (formData.phone.length < 8) {
      errs.phone = 'Nomor telepon minimal 8 digit.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Pesan atau pertanyaan wajib diisi.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childAge: '5-7',
      interest: 'trial',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
            Hubungi Tim Edukasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
            Konsultasi Gratis Bersama Konsultan Belajar
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            Punya pertanyaan mengenai kesiapan si kecil, program kurikulum sekolah, atau butuh panduan
            instalasi? Kami siap membantu dengan senang hati.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#EBF3FF] rounded-3xl p-6 sm:p-7 border border-blue-200/80">
              <h3 className="text-xl font-extrabold text-[#232758] font-heading mb-2">
                Kids-CodePlay Care
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Tim dukungan kami beroperasi 7 hari seminggu untuk mendampingi orang tua dan anak
                memulai perjalanan seru di dunia coding.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white hover:bg-slate-50 transition-colors shadow-2xs border border-blue-100 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">
                    <i className="fa-brands fa-whatsapp" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">WhatsApp Konsultan</p>
                    <p className="text-[11px] text-slate-500 font-medium">+62 812-3456-7890 (Respon Cepat)</p>
                  </div>
                </a>

                <a
                  href="mailto:halo@kidscodeplay.id"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white hover:bg-slate-50 transition-colors shadow-2xs border border-blue-100 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Email Resmi</p>
                    <p className="text-[11px] text-slate-500 font-medium">halo@kidscodeplay.id</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white shadow-2xs border border-blue-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-lg">
                    <i className="fa-solid fa-clock" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Jam Operasional</p>
                    <p className="text-[11px] text-slate-500 font-medium">Senin - Minggu (08.00 - 20.00 WIB)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety badge reminder */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <p className="text-xs text-emerald-800 font-semibold leading-relaxed">
                Data orang tua & anak dilindungi enkripsi SSL 256-bit dan tidak akan pernah dibagikan
                kepada pihak ketiga mana pun.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-10 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl mx-auto flex items-center justify-center mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading mb-2">
                  Pesan Berhasil Terkirim!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Terima kasih, <strong>{formData.parentName}</strong>. Konsultan edukasi kami akan
                  menghubungi Anda via WhatsApp/Email dalam kurun waktu maksimal 2 jam kerja.
                </p>
                <button
                  onClick={handleResetForm}
                  type="button"
                  className="px-6 py-2.5 bg-[#4C8BF5] text-white font-extrabold text-xs rounded-full hover:bg-[#3B7BE8] transition-colors cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Parent Name */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Nama Orang Tua / Pendidik <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Ibu Stephanie"
                      value={formData.parentName}
                      onChange={(e) => {
                        setFormData({ ...formData, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none ${
                        errors.parentName
                          ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                          : 'border-slate-300 focus:border-blue-500 bg-slate-50/40'
                      }`}
                    />
                    {errors.parentName && (
                      <p className="text-red-500 text-[11px] font-bold mt-1">{errors.parentName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Alamat Email Aktif <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none ${
                        errors.email
                          ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                          : 'border-slate-300 focus:border-blue-500 bg-slate-50/40'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] font-bold mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none ${
                        errors.phone
                          ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                          : 'border-slate-300 focus:border-blue-500 bg-slate-50/40'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[11px] font-bold mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Child Age Dropdown */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Rentang Usia Anak
                    </label>
                    <select
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50/40 text-sm focus:border-blue-500 outline-none"
                    >
                      <option value="5-7">5 - 7 Tahun (Level 1 Pemula)</option>
                      <option value="8-10">8 - 10 Tahun (Level 2-3 Loops & Logic)</option>
                      <option value="11-13">11 - 13 Tahun (Level 4 Game Maker)</option>
                      <option value=">13">Diatas 13 Tahun</option>
                      <option value="sekolah">Institusi Sekolah / Kursus</option>
                    </select>
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    Topik / Keperluan Konsultasi
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        interest: e.target.value as ContactFormData['interest'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50/40 text-sm focus:border-blue-500 outline-none"
                  >
                    <option value="trial">Aktivasi Uji Coba Gratis 14 Hari</option>
                    <option value="school">Kemitraan Kurikulum Sekolah / Bimbel</option>
                    <option value="pricing">Pertanyaan Paket & Metode Pembayaran</option>
                    <option value="support">Bantuan Teknis Aplikasi</option>
                    <option value="feedback">Saran & Umpan Balik</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    Pesan atau Pertanyaan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ceritakan ketertarikan anak Anda pada gadget/game, atau pertanyaan seputar pembelajaran coding..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none resize-none ${
                      errors.message
                        ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                        : 'border-slate-300 focus:border-blue-500 bg-slate-50/40'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[11px] font-bold mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#4C8BF5] hover:bg-[#3B7BE8] active:scale-98 disabled:opacity-60 text-white font-extrabold text-sm rounded-full shadow-[0_8px_20px_rgba(76,139,245,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin text-sm" />
                      <span>Mengirimkan Pesan...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirimkan Pesan Sekarang</span>
                      <i className="fa-solid fa-paper-plane text-xs" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
