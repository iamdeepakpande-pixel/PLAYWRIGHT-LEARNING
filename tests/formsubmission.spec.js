

import { test, expect } from '@playwright/test';

test('form submission test', async ({ page }) => {
 
 // open the index.html page
  await page.goto("file:///C:/Users/ADMIN/Downloads/automation-practice-master-main/automation-practice-master-main/app/index.html", {timeout: 10000});

// click on form submission link
  await page.getByText("Form Submission", {timeout: 10000}).click();


await expect(page).toHaveTitle("Form Submission Practice", {timeout: 10000}); // hard assertion 

await page.getByLabel("Full Name *", {timeout: 10000}).fill("Deepak Pande");
await page.getByLabel("Email Address *", {timeout: 10000}).fill("DSPANDE@GMAIL.COM");
await page.getByLabel("Password *", {timeout: 10000}).fill("DSP@123");
await page.getByLabel("Phone Number", {timeout: 10000}).fill("9876543210");
await page.getByPlaceholder("Enter your age", {timeout: 10000}).fill("25");
await page.getByLabel("Country", {timeout: 10000}).selectOption("india");
await page.getByLabel("Bio / About Me", {timeout: 10000}).fill("I am a software tester");
await page.waitForTimeout(10000);
await page.getByRole("button", {name: "Submit", timeout: 10000}).click();
await expect(page.getByText("Form submitted successfully!", {timeout: 10000})).toBeVisible();  // hard assertion

await page.waitForTimeout(10000);

// console.log("i am line after assertion")
}); 

// assertion means validation to check whether the element is visible or not
// hard assertion - if assertion fails then the test will fail and stop executing further steps   - use when pages changes and validations on multiple pages are required
// soft assertion - if assertion fails then the test will continue executing further steps - use when pages does not changes and validations on same page are required
// assertion - 5 sec 
// element - 30 sec
// await expect(page).toHaveTitle("Form Submission Practice");  // soft assertion 


// advanced reporting 
// merv report - html report
