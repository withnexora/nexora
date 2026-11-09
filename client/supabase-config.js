/* Public configuration only. Never place a Supabase service_role key here. */
const env = typeof import.meta !== "undefined" ? import.meta.env || {} : {};

export const SUPABASE_URL = String(env.VITE_SUPABASE_URL || "").trim();

export const SUPABASE_ANON_KEY = String(env.VITE_SUPABASE_ANON_KEY || "").trim();

export const SUPABASE_CONFIG_SOURCE = env.VITE_SUPABASE_URL
  ? "environment"
  : "missing-environment";
