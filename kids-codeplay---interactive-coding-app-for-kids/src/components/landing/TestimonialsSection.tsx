import React from 'react';
import { Testimonial } from '../../types';

const reviews: Testimonial[] = [
  {
    id: '1',
    name: 'Siti Rahmawati',
    role: 'Ibu dari Arkan (7 tahun)',
    avatar: '👩🏻',
    childInfo: 'Belajar sejak 6 bulan lalu',
    rating: 5,
    comment:
      'Arkan dulunya hanya suka main game tanpa tujuan. Sejak pakai Kids-CodePlay, dia malah bangga nunjukkin gimana dia menyelesaikan puzzle level 3 "The lost Number" dengan perintah minimal!',
    badge: 'Terverifikasi • Super Coder',
  },
  {
    id: '2',
    name: 'Budi Hartono, M.Pd.',
    role: 'Guru TIK SD Bina Prestasi',
    avatar: '👨🏻‍🏫',
    childInfo: 'Menggunakan untuk 120 siswa kelas 1-4',
    rating: 5,
    comment:
      'Kurikulumnya luar biasa terstruktur. Anak-anak tidak merasa sedang belajar hal berat karena konsep loop dan logika percabangan dibungkus seperti petualangan quest bergambar.',
    badge: 'Pendidik Mitra Resmi',
  },
  {
    id: '3',
    name: 'Stephanie & David',
    role: 'Orang Tua Stephanie (8 tahun)',
    avatar: '👩🏼',
    childInfo: 'Sudah mengoleksi 15 lencana',
    rating: 5,
    comment:
      'Tampilan aplikasinya sangat ramah anak dan warnanya cerah! Fitur laporan progres mingguan ke email orang tua sangat membantu kami memantau perkembangan Stephanie.',
    badge: 'Terverifikasi • Family Pack',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-wider">
            Cerita Keberhasilan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232758] mt-3 mb-4 font-heading tracking-tight">
            Dipercaya Oleh 15.000+ Orang Tua & Guru
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            Lihat bagaimana Kids-CodePlay membantu anak-anak menumbuhkan rasa percaya diri dan cinta
            pada sains & teknologi.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4 text-base">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-xs">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1E293B] text-sm leading-snug">
                    {rev.name}
                  </h4>
                  <p className="text-slate-500 text-xs">{rev.role}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {rev.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
