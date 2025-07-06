import { Page, expect } from "@playwright/test";
import { config } from "../config/config";

export class HomePage {
  private page: Page;
  private deliveryButton;
  private carryoutButton;
  private onlineOrderHeader;
  private onlineOrderButton;
  private mixMaxDeal;
  private carryOutDeal;
  private comboDeal;

  constructor(page: Page) {
    this.page = page;
    this.deliveryButton = this.page.locator('button:has-text("DELIVERY")');
    this.carryoutButton = this.page.locator('button:has-text("CARRYOUT")');
    this.onlineOrderHeader = this.page.locator(
      'h1:has-text("START YOUR ORDER")'
    );
    this.onlineOrderButton = this.page.locator(
      'a[data-quid="main-navigation-order-online"]'
    );
    this.mixMaxDeal = this.page.locator('div[data-quid="mix-and-match-deal]');
    this.carryOutDeal = this.page.locator('div[data-quid="carryout-deal"]');
    this.comboDeal = this.page.locator('p[data-quid="perfect-combo-deal"]');
  }

  async navigateToHomepage() {
    try {
      console.log("Navigating to:", config.baseUrl);
      await this.page.goto(config.baseUrl, { waitUntil: 'domcontentloaded' });
      console.log("Navigation success");
    } catch (error) {
      console.error("Navigation failed:", error);
      throw error;
    }
  }

  async verifyHomePageTitle(title: string) {
    let pageTitle = await this.page.title();
    expect(pageTitle).toContain("Pizza Delivery & Carryout,")
  }

  async acceptCookies() {
    const acceptButton = this.page.locator("#acceptAllCookies");
    if (await acceptButton.isVisible()) {
      await acceptButton.click();
    }
  }

  async clickDeliveryButton() {
  await Promise.all([
    this.page.waitForNavigation({ waitUntil: 'load' }),
    this.deliveryButton.click()
  ]);
}

  async clickCarryoutButton() {
    await this.carryoutButton.click();
  }

  async clickOrderOnline() {
  console.log('Waiting for ORDER ONLINE button...');
  await this.onlineOrderButton.waitFor({ state: 'visible', timeout: 10000 });
  console.log('Clicking ORDER ONLINE button');
  await this.onlineOrderButton.click();

  async verifyOnlineOrderHeader() {
    await expect(this.onlineOrderHeader).toBeVisible();
    await expect(this.onlineOrderHeader).toHaveText("START YOUR ORDER");
  }

  async verifyDeals() {
    await expect(this.mixMaxDeal).toBeVisible();
    await expect(this.carryOutDeal).toBeVisible();
    await expect(this.comboDeal).toBeVisible();
  }

  async orderOnline() {
    await this.navigateToHomepage();
    await this.acceptCookies();
    await this.verifyHomePageTitle(
      "Domino's Pizza, Order Pizza Online for Delivery - Dominos.com"
    );
    await this.verifyOnlineOrderHeader();
    await this.verifyDeals();
    await this.onlineOrderButton.click();
  }
  async navigateToOrderPage() {}
}
