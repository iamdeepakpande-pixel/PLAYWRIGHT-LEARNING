import { test, expect } from "@playwright/test";
await page.locator("body").click();
await page.goto("https://www.saucedemo.com/");
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="login-credentials"]').click();
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill("");
await page.locator('[data-test="username"]').press("CapsLock");
await page.locator('[data-test="username"]').fill("standard_user");
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill("secret_sauce");
await page.locator('[data-test="login-button"]').click();
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();
await page.locator('[data-test="checkout"]').click();
await page.locator('[data-test="firstName"]').click();
await page.locator('[data-test="firstName"]').fill("dfgad");
await page.locator(".checkout_info").click();
await page.locator(".checkout_info").click();
await page.locator('[data-test="lastName"]').fill("dfhgadf");
await page.locator('[data-test="postalCode"]').click();
await page.locator('[data-test="postalCode"]').click();
await page.locator('[data-test="postalCode"]').fill("24325");
await page.locator('[data-test="postalCode"]').press("F4");
await page.locator('[data-test="postalCode"]').fill("2432546");
await page.locator('[data-test="continue"]').click();
await page.locator('[data-test="finish"]').click();

test("Happy Flow", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="login-credentials"]').dblclick();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(
    page.locator('[data-test="remove-sauce-labs-backpack"]'),
  ).toBeVisible();

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page
    .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    .click();
  await page
    .locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    .click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page
    .locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    .click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();

  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('[data-test="cancel"]')).toBeVisible();

  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill("john");
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill("doe");
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill("413251");
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();

  await page.locator('[data-test="finish"]').click();
});
