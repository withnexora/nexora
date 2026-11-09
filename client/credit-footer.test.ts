import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname);
const pages = ["index.html", "article.html", "admin-mantis.html", "admin-argon.html"];
const githubUrl = "https://github.com/withnexora";

describe("Nexora Contributes credit", () => {
  it("is present in every supported footer with the locked GitHub destination", () => {
    for (const page of pages) {
      const html = readFileSync(resolve(root, page), "utf8");
      expect(html).toContain("Design by");
      expect(html).toContain("Nexora Contributes");
      expect(html).toContain(`href="${githubUrl}"`);
      expect(html).toContain('target="_blank"');
      expect(html).toContain('rel="noopener noreferrer"');
    }
  });

  it("does not make the credit depend on a CMS setting or runtime URL", () => {
    const html = readFileSync(resolve(root, "index.html"), "utf8");
    expect(html).toContain('class="footer-credit-fixed"');
    expect(readFileSync(resolve(root, "site-motion-footer.css"), "utf8")).toContain(".footer-credit-fixed");
    expect(html).not.toContain("footer_credit_text");
  });
});
