import { test, expect } from '@playwright/test';

test('submit form', { tag: '@smoke' }, async ({ page }) => {
  await page.goto('file:///C:/Users/ADMIN/Downloads/automation-practice-master-main/automation-practice-master-main/app/index.html');
  await page.getByRole('link', { name: '📝 Form Submission Practice' }).click();
  await expect(page.getByRole('heading', { name: 'Form Submission Practice' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Full Name *' }).click();
  await page.getByRole('textbox', { name: 'Full Name *' }).fill('deepak pande');
  await page.getByRole('textbox', { name: 'Email Address *' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('deepakpande@gmail.com');
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('dsp@123');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('98563689282');
  await page.getByRole('spinbutton', { name: 'Age' }).click();
  await page.getByRole('spinbutton', { name: 'Age' }).fill('34');
  await page.getByLabel('Country').selectOption('india');
  await page.getByRole('textbox', { name: 'Bio / About Me' }).click();
  await page.getByRole('textbox', { name: 'Bio / About Me' }).fill('hello..');

  await expect(page.getByRole('button', { name: 'Submit Form' })).toBeEnabled();
  await page.getByRole('button', { name: 'Submit Form' }).click();
});