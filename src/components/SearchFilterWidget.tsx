"use client";

import React from "react";
import { Search, Filter, RefreshCw } from "lucide-react";

interface SearchFilterWidgetProps {
  selectedBody: string;
  setSelectedBody: (val: string) => void;
  selectedMake: string;
  setSelectedMake: (val: string) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  onReset: () => void;
  totalFiltered: number;
}

export const SearchFilterWidget: React.FC<SearchFilterWidgetProps> = ({
  selectedBody,
  setSelectedBody,
  selectedMake,
  setSelectedMake,
  maxPrice,
  setMaxPrice,
  searchTerm,
  setSearchTerm,
  onReset,
  totalFiltered,
}) => {
  return (
    <div className="relative -mt-10 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Sleek, sharp dark container aligned with proven previous demo style */}
      <div className="bg-[#242021] border border-slate-700 p-5 sm:p-7 shadow-2xl rounded-lg">
        
        {/* Title bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-700/80 pb-3">
          <div className="flex items-center gap-2 text-white">
            <Filter className="w-4 h-4 text-[#0066FF]" />
            <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
              Encuentra Tu Próxima Pickup o Seminuevo
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300 bg-[#1C1E23] px-3 py-1 rounded border border-slate-700">
              <strong className="text-[#EA580C] font-bold">{totalFiltered}</strong> unidades en inventario
            </span>
            {(selectedBody !== "all" || selectedMake !== "all" || maxPrice < 1000000 || searchTerm) && (
              <button
                onClick={onReset}
                className="flex items-center gap-1 text-slate-300 hover:text-[#0066FF] transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Restablecer filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter inputs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Keyword Search */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Buscar Modelo o Marca
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ej. Hilux, Frontier, Ranger, Tacoma..."
                className="w-full bg-[#1C1E23] border border-slate-700 rounded px-3.5 pl-10 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#0066FF] transition-colors"
              />
            </div>
          </div>

          {/* Body Type */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Tipo de Carrocería
            </label>
            <select
              value={selectedBody}
              onChange={(e) => setSelectedBody(e.target.value)}
              className="w-full bg-[#1C1E23] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-colors cursor-pointer"
            >
              <option value="all">Todas las Carrocerías</option>
              <option value="Pickup">Pickups &amp; 4x4 de Trabajo</option>
              <option value="SUV">SUVs y Crossovers</option>
              <option value="Sedán">Sedanes</option>
            </select>
          </div>

          {/* Make Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Marca
            </label>
            <select
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
              className="w-full bg-[#1C1E23] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-colors cursor-pointer"
            >
              <option value="all">Todas las Marcas</option>
              <option value="Toyota">Toyota</option>
              <option value="Nissan">Nissan</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="RAM">RAM</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="Mazda">Mazda</option>
              <option value="Volkswagen">Volkswagen</option>
            </select>
          </div>

          {/* Max Price Range Slider */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex justify-between">
              <span>Presupuesto Máximo</span>
              <span className="text-[#0066FF] font-bold">
                {maxPrice >= 1000000 ? "Sin límite" : `$${(maxPrice / 1000).toFixed(0)}k MXN`}
              </span>
            </label>
            <div className="pt-2">
              <input
                type="range"
                min={350000}
                max={1000000}
                step={25000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded appearance-none cursor-pointer accent-[#0066FF]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$350k</span>
                <span>$650k</span>
                <span>$1M+</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
