"use client";

import React from "react";
import { businessInfo } from "@/data/inventory";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight,
  Truck
} from "lucide-react";
import { FacebookIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1A1B] text-slate-300 border-t border-slate-800">
      
      {/* Top Banner: Quick Reassurance */}
      <div className="bg-[#242021] border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#1C1A1B] border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Especialistas en Pickups &amp; Seminuevos en Puebla
              </h4>
              <p className="text-xs text-slate-400">
                Garantía legal y mecánica por escrito en cada unidad. Lote establecido en Prolongación Reforma 4510.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" className="h-16 w-auto" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              Lote especializado en compra, venta y consignación de camionetas pickups y seminuevos garantizados en Puebla. Más de 15 años ofreciendo transparencia, respaldo bancario y garantía legal por escrito.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Oficial de Pickups Seminuevos Puebla"
                className="w-9 h-9 rounded bg-[#242021] hover:bg-[#0066FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="w-9 h-9 rounded bg-[#242021] hover:bg-[#0066FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalogo" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Inventario</span>
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Simulador de Crédito</span>
                </a>
              </li>
              <li>
                <a href="#por-que-nosotros" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Garantía &amp; Respaldo</span>
                </a>
              </li>
              <li>
                <a href="#vender-auto" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Vender mi Auto / Toma</span>
                </a>
              </li>
              <li>
                <a href="#sucursal" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Sucursal &amp; Citas</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Vehicles by Type (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Pickups &amp; Modelos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalogo" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Toyota Hilux &amp; Tacoma 4x4</span>
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Nissan Frontier LE Diésel</span>
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Ford Ranger XLT EcoBoost</span>
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#0066FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  <span>Chevrolet Cheyenne &amp; RAM 1500 V8</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Sucursal &amp; Atención
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href={`tel:${businessInfo.phoneClean}`} className="hover:text-white transition-colors">
                  {businessInfo.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Lun - Vie: 9:00 - 19:00 | Sáb: 9:00 - 17:00</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Aviso de Privacidad</span>
            <span>•</span>
            <span>Términos y Condiciones</span>
            <span>•</span>
            <span>Prolongación Reforma 4510, Puebla</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
