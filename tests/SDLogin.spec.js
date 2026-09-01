import { test, expect } from "@playwright/test";
import userdata from "../testdata/userdata.json" with { type: "json" };

for (let i = 0; i < userdata.length; i++) {
  let loginCred = userdata[i];

  test(`testcase for ${loginCred.username}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(loginCred.username);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(loginCred.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
}
