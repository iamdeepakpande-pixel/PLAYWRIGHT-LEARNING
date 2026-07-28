// spec: OrangeHRM Dashboard Test Plan
// seed: tests/seed.spec.ts

import { expect, test } from "@playwright/test";

const baseURL = process.env.ORANGEHRM_BASE_URL ?? "https://opensource-demo.orangehrmlive.com";
const username = process.env.ORANGEHRM_USERNAME;
const password = process.env.ORANGEHRM_PASSWORD;

test.describe("OrangeHRM Dashboard", () => {
  test("Dashboard access for an authenticated admin", async ({ page }) => {
    test.skip(
      !username || !password,
      "Set ORANGEHRM_USERNAME and ORANGEHRM_PASSWORD before running this test.",
    );
    test.slow();

    // 1. Open the dashboard URL without authenticating and expect the login form.
    await page.goto(new URL("/web/index.php/dashboard/index", baseURL).toString());
    await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Dashboard" })).not.toBeVisible();

    // 2. Enter the configured admin username and password in the login form.
    await page.getByPlaceholder("Username").fill(username!);
    await page.getByPlaceholder("Password").fill(password!);

    // 3. Submit the login form to open the dashboard.
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

    // 4. Verify the Dashboard navigation item is active and the authenticated user menu is visible.
    const dashboardLink = page.getByRole("link", { name: "Dashboard", exact: true });
    await expect(dashboardLink).toHaveClass(/active/);
    await expect(page.locator(".oxd-userdropdown-name")).toBeVisible();

    // 5. Verify dashboard widgets are visible.
    await expect(page.getByText("Time at Work", { exact: true })).toBeVisible();
    await expect(page.getByText("Quick Launch", { exact: true })).toBeVisible();

    // 6. Navigate to PIM from the sidebar, then return to Dashboard.
    await page.getByRole("link", { name: "PIM", exact: true }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/pim\/viewEmployeeList$/);
    await expect(page.getByRole("heading", { name: "Employee Information" })).toBeVisible();
    await dashboardLink.click();
    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  });
});
