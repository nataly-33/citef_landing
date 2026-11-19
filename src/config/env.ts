/**
 * Configuración centralizada de variables de entorno para SmartLab Landing
 */
export const CITEF_URL: string =
  (import.meta as any).env?.VITE_CITEF_URL || 'http://localhost:4200';
