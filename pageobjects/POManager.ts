import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { StoreLocatorPage } from './StoreLocatorPage';
import { DealsAndPromotions } from './DealsAndPromotions';

export class POManager {
    private page:Page;
    private homePage: HomePage;
    private storeLocatorPage: StoreLocatorPage;
    private dealsAndPromotions: DealsAndPromotions;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.storeLocatorPage = new StoreLocatorPage(page);
        this.dealsAndPromotions = new DealsAndPromotions(page);
    }

    getHomePage(){
        return new HomePage(this.page);
    }

    getStoreLocatorPage(){
        return new StoreLocatorPage(this.page);
    }

    getDealsAndPromotions() {
        return new DealsAndPromotions(this.page);
    }

    async closeBrowser() {
        await this.page.close();
    }
}

