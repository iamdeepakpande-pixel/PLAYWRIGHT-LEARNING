
//Fixtures
// for UI Testing, playwright provides some predefined objects which are available in the test context and can be used in the test without importing them explicitly. These predefined objects are called fixtures. Fixtures are a way to set up the environment for your tests. They can be used to create reusable test data, mock APIs, or set up browser contexts
//defn:  predefined objects in playwright which are available in the test context and can be used in the test without importing them explicitly
//  Fixtures are a way to set up the environment for your tests. They can be used to create reusable test data, mock APIs, or set up browser contexts and pages. In Playwright, fixtures can be defined in the test configuration file or in separate files and imported into your tests.
//types: browser fixtures, context fixtures, page fixtures
// browser fixtures are like services & they are available in the test context, so you can use them in your tests without importing them explicitly.
// context fixtures are like incognito sessions or isolated cookies free sessions
// page fixtures are like tabs in the browser, they are available in the test context, so you can use them in your tests without importing them explicitly.
// difference between browser, context and page fixtures:
// In Playwright, Browser, BrowserContext (Context), and Page represent three hierarchical levels of browser automation and isolation:

// Browser

// Definition: An instance of a physical browser executable (such as Chromium, Firefox, or WebKit).

// Isolation: High-level and resource-heavy. Starting a browser launches an actual browser process.

// Use Case: Managed automatically by Playwright across workers. You rarely need to interact with the browser fixture directly unless configuring browser-wide settings.

// BrowserContext (Context)

// Definition: An isolated, in-memory session within a single browser instance (similar to an Incognito window).

// Isolation: Provides strict isolation. Each context has its own completely separate local storage, cookies, session storage, cache, and permissions.

// Use Case: Ideal for multi-user scenarios (e.g., testing two different logged-in users interacting in real-time) or isolating test state cleanly without the heavy performance overhead of starting new browser instances.

// Page

// Definition: A single tab or window contained within a specific BrowserContext.

// Isolation: Low-level. Shares state, cookies, and session data with all other pages created within the same context.

// Use Case: Used for standard end-to-end interactions, navigating to URLs, clicking buttons, filling out forms, and verifying UI elements.
// hierarchy of fixtures in playwright: browser > context > page
// Browser
//  └── Context 1
//  │    ├── Page 1 (Tab A)
//  │    └── Page 2 (Tab B)
//  └──Context 2
//       └── Page 1 (Tab C)

// 1. browser fixtures: browser

import { test, expect } from '@playwright/test';

test('verify user able to open context', async ({ browser }) => {
  const context1 = await browser.newContext();
  const page1 =await context1.newPage();
  const page2 =await context1.newPage();
  await page1.goto("https://www.google.com");
  await page2.goto("https://www.amazon.com");
  const context2 = await browser.newContext();
  const page3=await context2.newPage();
  const page4 =await context2.newPage();
  await page3.goto("https://www.facebook.com");
  await page4.goto("https://www.techelliptica.com");

  await page1.waitForTimeout(2000);
  await page2.waitForTimeout(2000);
  await page3.waitForTimeout(2000);
  await page4.waitForTimeout(2000);

});


// 2. context fixtures: context/ isolated sessions


// import { test, expect } from '@playwright/test';

// test('context fixtures understanding', async ({ context }) => {

// const page1 = await context.newPage();
// page1.goto("https://www.google.com");
// const page2 = await context.newPage();
// page2.goto("https://www.amazon.com");

// await page1.waitForTimeout(10000);
// await page2.waitForTimeout(10000);
// });


// 3. page fixtures: page/ tabs

