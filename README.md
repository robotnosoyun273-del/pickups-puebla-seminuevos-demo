# 🛻 Pickups Seminuevos Puebla — Demo Comercial

Demo comercial interactiva e independiente diseñada para el lote automotriz **Pickups Seminuevos Puebla** (Pickups & Seminuevos), ubicado en Prolongación Reforma 4510, Reforma, Puebla.

## Stack Tecnológico
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Estilos:** Tailwind CSS v4 con la paleta de identidad del lote:
  - **Azul Eléctrico / Principal:** `#0066FF` (Hover: `#0052CC`, Acento: `#38BDF8`)
  - **Naranja Emblema:** `#EA580C` / `#F97316` (presente en la palabra "SEMINUEVOS" del logo oficial y acentos destacados)
  - **Fondo Carbón / Grafito:** `#1C1E23` / `#242021` (siguiendo la estructura visual probada de Autos Certificados Tlalpan)
  - **Cuerpo Claro:** `#F8FAFC` con tarjetas nítidas en `#FFFFFF`
- **Iconos:** Lucide React + SVGs nativos optimizados
- **Datos y Servicios:** Capa desacoplada en `src/services/inventoryService.ts` y Mock Data en `src/data/inventory.ts`
- **Integraciones:** Botones dinámicos a WhatsApp (`+52 222 248 5436`) con mensajes prellenados para cada unidad, simulador y avalúo.

## Secciones Implementadas
1. **Top Bar de Información:** Dirección física en Prolongación Reforma 4510, horario de atención, teléfono (222) 248 5436, enlace oficial a Facebook y WhatsApp directo.
2. **Navbar Principal:** Logotipo oficial con silueta de camioneta pickup y tipografía oficial ("PICKUP'S SEMINUEVOS" con "SEMINUEVOS" en naranja), enlaces ancla y botón CTA de contacto.
3. **Hero Section:** Titular persuasivo enfocado en camionetas garantizadas en Puebla, badges de inspección de 120 puntos, botones directos al catálogo y tarjeta destacada con ficha de Toyota Hilux.
4. **Buscador & Filtro Multicriterio:** Filtro flotante por tipo de carrocería (Pickups, SUVs, Sedanes), tracción (4x4, 4x2), marca, rango de precio en MXN y búsqueda por texto libre con contador de resultados en vivo.
5. **Cintillo de Marcas Populares:** Accesos directos para filtrar por Toyota, Nissan, Ford, Chevrolet, RAM, Mitsubishi, Mazda y VW.
6. **Catálogo de Unidades:** 9 vehículos detallados con especificaciones completas (Hilux, Frontier 4x4 Diésel, Ranger XLT, Tacoma TRD Sport, Cheyenne RST V8, RAM 1500 HEMI, Mitsubishi L200, Mazda CX-5 y Jetta R-Line).
7. **Ficha Técnica Modal:** Galería interactiva con selector de miniaturas, tabla de especificaciones técnicas (potencia, carga, factura, dueños, garantía) y lista de equipamiento.
8. **Simulador de Crédito Automotriz:** Selector interactivo de enganche (20% al 70%) y plazos (12 a 60 meses) con cálculo automático en vivo de la mensualidad y botón para solicitar el trámite por WhatsApp con los números calculados.
9. **Módulo 'Vender mi Auto / Toma a Cuenta':** Formulario de cotización exprés para dejar auto a cuenta con envío directo a WhatsApp.
10. **Pilares de Confianza & Garantía:** Explicación de revisión de suspensión/chasis para pickups, garantía por escrito de 1 año y blindaje legal en REPUVE/SAT.
11. **Testimonios de Clientes:** Opiniones de compradores en Puebla, Cholula y Texmelucan con badge de 4.9 estrellas.
12. **Sucursal & Cita de Manejo:** Mapa embebido de Google Maps con la ubicación exacta en Prol. Reforma 4510, botón directo para navegación por Waze/Maps y formulario de cita.
13. **Footer:** Logotipo oficial en versión clara sobre fondo carbón, enlaces rápidos, horarios, teléfonos y aviso de derechos.
14. **Botón Flotante de WhatsApp:** Acceso rápido flotante con globo de diálogo animado.

## Comandos
```bash
npm run dev    # Iniciar servidor local de desarrollo en puerto 3001
npm run build  # Compilar para producción (Next.js Turbopack)
```
