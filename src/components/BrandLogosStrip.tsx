"use client";

import React from "react";

interface BrandLogosStripProps {
  onSelectBrand: (brand: string) => void;
}

const brands = [
  { name: "Toyota", filter: "Toyota" },
  { name: "Nissan", filter: "Nissan" },
  { name: "Ford", filter: "Ford" },
  { name: "Chevrolet", filter: "Chevrolet" },
  { name: "RAM", filter: "RAM" },
  { name: "Mitsubishi", filter: "Mitsubishi" },
  { name: "Mazda", filter: "Mazda" },
  { name: "Volkswagen", filter: "Volkswagen" },
];

export const BrandLogosStrip: React.FC<BrandLogosStripProps> = ({ onSelectBrand }) => {
  return (
    <section className="py-10 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <p className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
            Marcas disponibles en inventario físico en Puebla (Prol. Reforma):
          </p>
          <span className="text-xs text-slate-400">
            Haz clic en una marca para filtrar de inmediato
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {brands.map((b) => (
            <button
              key={b.name}
              onClick={() => onSelectBrand(b.filter)}
              className="py-2.5 px-3 rounded bg-white hover:bg-[#0066FF] hover:text-white text-slate-800 text-xs font-bold border border-slate-200 hover:border-[#0066FF] transition-all shadow-sm hover:shadow text-center cursor-pointer"
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
