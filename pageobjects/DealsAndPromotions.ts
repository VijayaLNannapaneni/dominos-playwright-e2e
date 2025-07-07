import {Page,expect} from '@playwright/test';
import { config } from '../config/config';
import { time } from 'console';

export class DealsAndPromotions{
    private page: Page;
    private buy2Deal;
    private mixAndMaxDeal;
    private bestDealEver;
    private carryOutDeal;  
    private perfectComboDeal;


    constructor(page: Page){
        this.page = page;
        this.buy2Deal = page.locator("button[data-quid='primary-nav-sign-in-earn-points']");
        this.mixAndMaxDeal=page.locator("div[data-quid='mix-and-match-deal']");
        this.bestDealEver = page.locator("div[data-quid='any-pizza-999-tile']");
        this.carryOutDeal= page.locator("div[data-quid='carryout-deal']");
        this.perfectComboDeal = page.locator("div[data-quid='perfect-combo-deal']"); 
    }

    async verifyAllDealsOnTheHomePage() {
        console.log('Waiting for Deals buttons...');        
        await this.page.waitForLoadState('load');        
        await this.buy2Deal.waitFor({ state: 'visible', timeout: 15000 });
        await expect(this.buy2Deal).toBeVisible();
        await this.mixAndMaxDeal.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.mixAndMaxDeal).toBeVisible();
        await this.bestDealEver.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.bestDealEver).toBeVisible();
        await this.carryOutDeal.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.carryOutDeal).toBeVisible(); 
        await this.perfectComboDeal.scrollIntoViewIfNeeded();
        await expect(this.perfectComboDeal).toBeVisible();
        console.log('Perfect Combo Deal is visible');        
        console.log('All Deals buttons are visible');   

    }
    async clickMixAndMaxDeal() {
        await this.mixAndMaxDeal.click();
        await expect(this.page).toHaveURL(/.*mix-and-match/);
    }
    async clickCarryOutDeal() {
        await this.carryOutDeal.click();
        await expect(this.page).toHaveURL(/.*carryout-deal/);
    }

    async clickBestDealEver() {
        await this.bestDealEver.click();
        await expect(this.page).toHaveURL(/.*any-pizza-999/);
    }
    async clickPerfectComboDeal() {
        await this.perfectComboDeal.click();
        await expect(this.page).toHaveURL(/.*perfect-combo/);

    }
    async clickBuy2Deal() {
        await this.buy2Deal.click();
        await expect(this.page).toHaveURL(/.*buy-2-get-1-free/);
    }
    

}