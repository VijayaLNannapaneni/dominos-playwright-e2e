import { setWorldConstructor, World, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { POManager } from '../pageobjects/POManager';

let browser: Browser;

export class CustomWorldImpl extends World {
  page!: Page;
  poManager!: POManager;
}

setWorldConstructor(CustomWorldImpl);

// Hooks to launch and close browser for each scenario

Before(async function (this: CustomWorldImpl) {
  browser = await chromium.launch({ headless: true });

  this.page = await browser.newPage();
  this.poManager = new POManager(this.page);
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});
