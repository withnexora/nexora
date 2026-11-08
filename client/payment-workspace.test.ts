import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const indexHtml = readFileSync(resolve(process.cwd(), "client/index.html"), "utf8");
const workspaceCss = readFileSync(resolve(process.cwd(), "client/payment-workspace.css"), "utf8");
const appJs = readFileSync(resolve(process.cwd(), "client/app.js"), "utf8");

describe("payment workspace", () => {
  it("keeps the payment flow split into an order rail and payment stage", () => {
    expect(indexHtml).toContain('class="payment-workspace"');
    expect(indexHtml).toContain('class="payment-order-rail"');
    expect(indexHtml).toContain('class="payment-main-stage"');
    expect(indexHtml).toContain('id="paymentRailOrder"');
    expect(indexHtml).toContain('id="copyPaymentOrder"');
    expect(indexHtml).toContain('aria-label="Tóm tắt đơn hàng"');
  });

  it("includes responsive and reduced-motion safeguards", () => {
    expect(workspaceCss).toContain("@media (max-width: 760px)");
    expect(workspaceCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(workspaceCss).toContain("payment-qr-in");
  });

  it("updates the new rail from the same order state as the QR details", () => {
    expect(appJs).toContain('paymentRailOrder.textContent = number');
    expect(appJs).toContain('paymentRailTotal.textContent = formatCurrency(total)');
    expect(appJs).toContain('copyPaymentOrder.dataset.copyValue = number');
  });
});
