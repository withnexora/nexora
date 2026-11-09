import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const supabaseUrl = String(process.env.VITE_SUPABASE_URL || "").replace(/\/$/, "");
const publishableKey = String(process.env.VITE_SUPABASE_ANON_KEY || "");
const configSource = readFileSync(resolve(process.cwd(), "client/supabase-config.js"), "utf8");

describe("Supabase public environment", () => {
  it("reaches the Auth settings endpoint with the configured publishable key", async () => {
    if (!supabaseUrl || !publishableKey) {
      return;
    }

    const response = await fetch(`${supabaseUrl}/auth/v1/settings`, {
      headers: { apikey: publishableKey },
    });

    expect(response.ok).toBe(true);
  }, 15_000);

  it("keeps project-specific values outside the source module", () => {
    expect(configSource).toContain("env.VITE_SUPABASE_URL");
    expect(configSource).toContain("env.VITE_SUPABASE_ANON_KEY");
    expect(configSource).not.toContain("qdsqacpdoxsznyywdrgd.supabase.co");
    expect(configSource).not.toContain("sb_publishable_mZruXNPAPb4caa5VyCvRTg_cnb_hbrS");
  });
});
