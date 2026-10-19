import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pickups Seminuevos Puebla | Especialistas en Pickups y Seminuevos Garantizados",
  description: "Compra, venta y financiamiento de camionetas Pickups y seminuevos certificados en Prolongación Reforma 4510, Puebla. Hilux, Frontier, Ranger, Tacoma, RAM y más.",
  keywords: [
    "pickups puebla seminuevos",
    "camionetas puebla",
    "pickups reforma puebla",
    "seminuevos prol reforma",
    "lote de camionetas puebla",
    "toyota hilux puebla seminueva",
    "nissan frontier puebla",
    "tacoma puebla seminueva",
    "financiamiento pickups puebla",
  ],
  openGraph: {
    title: "Pickups Seminuevos Puebla | Inventario de Pickups y Camionetas",
    description: "Unidades revisadas legal y mecánicamente con garantía por escrito. Enganche desde el 20% y toma de tu auto a cuenta.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${lato.variable} ${montserrat.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-[#0066FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
