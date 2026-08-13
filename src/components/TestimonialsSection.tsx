import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, Quote, CheckCircle2, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0F172A] relative border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center justify-center gap-2">
            <Quote className="w-3.5 h-3.5 text-[#D4AF37]" />
            Client Feedback & Case Results
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by US & Global Brands
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            What happy clients say when high-level content, effortless communication, and exceeding expectations come together.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#1E293B] rounded p-6 border border-slate-700/50 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between space-y-5 relative shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Rating Stars */}
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Author Info with 70% larger image directly below star ratings */}
                <div className="flex items-center space-x-4 pt-1">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-[68px] h-[68px] rounded-full object-cover border-2 border-[#D4AF37] shadow-md shrink-0 grayscale hover:grayscale-0 transition-all"
                  />
                  <div>
                    <h4 className="text-white font-extrabold text-sm uppercase tracking-wide">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.role}</p>
                    <p className="text-xs font-semibold text-[#D4AF37]">{t.company}</p>
                  </div>
                </div>

                {/* Testimonial Body Quote */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                  "{t.content}"
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
