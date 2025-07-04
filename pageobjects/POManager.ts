import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { StoreLocatorPage } from './StoreLocatorPage';

export class POManager {
    private page:Page;
    private homePage: HomePage;
    private storeLocatorPage: StoreLocatorPage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.storeLocatorPage = new StoreLocatorPage(page);
    }

    getHomePage(){
        return new HomePage(this.page);
    }

    getStoreLocatorPage(){
        return new StoreLocatorPage(this.page);
    }
    async closeBrowser() {
        await this.page.close();
    }
}

