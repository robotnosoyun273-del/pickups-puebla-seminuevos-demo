"use client";

import React from "react";

interface LogoProps {
  variant?: "dark" | "light"; // dark = for light backgrounds (Navbar), light = for dark backgrounds (Footer)
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "h-12 w-auto",
}) => {
  const isLight = variant === "light";
  
  // High-resolution, transparent logo:
  // variant dark (for white navbar): black truck silhouette + black PICKUP'S + vibrant orange SEMINUEVOS
  // variant light (for dark footer): white truck silhouette + white PICKUP'S + vibrant orange SEMINUEVOS
  const logoSrc = isLight ? "/logo-light.png" : "/logo-dark.png";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Pickups Seminuevos Puebla"
        className="h-full w-auto max-h-16 object-contain"
        loading="eager"
      />
    </div>
  );
};
