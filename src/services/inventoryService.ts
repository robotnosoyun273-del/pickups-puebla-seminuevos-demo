import { vehicles, businessInfo, Vehicle } from "@/data/inventory";

export interface VehicleFilters {
  bodyType?: string;
  make?: string;
  traction?: string;
  maxPrice?: number;
  searchTerm?: string;
  fuel?: string;
}

/**
 * Obtener todos los vehículos del inventario
 * (Preparado para sustituir con llamada a Supabase/API en fase cliente)
 */
export async function getVehicles(filters?: VehicleFilters): Promise<Vehicle[]> {
  let result = [...vehicles];

  if (!filters) return result;

  if (filters.bodyType && filters.bodyType !== "all") {
    result = result.filter((v) => v.bodyType.toLowerCase() === filters.bodyType?.toLowerCase());
  }

  if (filters.make && filters.make !== "all") {
    result = result.filter((v) => v.make.toLowerCase() === filters.make?.toLowerCase());
  }

  if (filters.traction && filters.traction !== "all") {
    result = result.filter((v) => v.traction === filters.traction);
  }

  if (filters.maxPrice && filters.maxPrice > 0) {
    result = result.filter((v) => v.price <= (filters.maxPrice || Infinity));
  }

  if (filters.searchTerm && filters.searchTerm.trim() !== "") {
    const q = filters.searchTerm.toLowerCase().trim();
    result = result.filter((v) => {
      const haystack = `${v.make} ${v.model} ${v.version} ${v.year} ${v.bodyType} ${v.traction || ""}`.toLowerCase();
      return haystack.includes(q);
    });
  }

  return result;
}

/**
 * Obtener un vehículo por su identificador
 */
export async function getVehicleById(id: string): Promise<Vehicle | null> {
  const vehicle = vehicles.find((v) => v.id === id);
  return vehicle || null;
}

/**
 * Obtener los vehículos destacados para la portada
 */
export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  return vehicles.filter((v) => v.featured);
}

/**
 * Obtener la información general del negocio
 */
export function getBusinessInfo() {
  return businessInfo;
}
