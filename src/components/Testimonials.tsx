"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";

const reviews = [
  {
    name: "Ing. Roberto Morales C.",
    vehicle: "Compró Toyota Hilux Doble Cabina 2022",
    rating: 5,
    date: "Hace 2 semanas",
    comment:
      "Buscaba una Hilux para obra y reparto en la zona de Atlixco. En Pickups Seminuevos Puebla me mostraron la camioneta en su lote sobre Reforma, me permitieron llevar a mi mecánico de confianza y los papeles estaban 100% impecables. Trato de diez.",
  },
  {
    name: "Arq. Valeria Domínguez",
    vehicle: "Compró Nissan Frontier LE 4x4 2023",
    rating: 5,
    date: "Hace 1 mes",
    comment:
      "Dejé a cuenta mi auto anterior y me llevé la Frontier. Me tomaron mi auto a un precio muy justo y el crédito bancario me lo autorizaron al día siguiente con Scotiabank. Súper recomendados en Prolongación Reforma.",
  },
  {
    name: "Don Esteban Téllez",
    vehicle: "Compró Ford Ranger XLT 4x4 2022",
    rating: 5,
    date: "Hace 1 mes",
    comment:
      "La atención del equipo en Prolongación Reforma 4510 fue muy seria y transparente. Nos entregaron póliza de garantía física y copia de todo el historial. La camioneta jala con toda la fuerza para el trabajo del campo.",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-xs font-bold text-[#0066FF] uppercase tracking-wider">
            <div className="flex text-[#0066FF]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>Calificación 4.9 en Google &amp; Facebook</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            Experiencias Reales de Clientes en Puebla
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Más de 15 años entregando camionetas y seminuevos certificados en Prolongación Reforma 4510.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#0066FF]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{r.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {r.name}
                  </h4>
                  <span className="text-xs text-[#0066FF] font-semibold block">
                    {r.vehicle}
                  </span>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
