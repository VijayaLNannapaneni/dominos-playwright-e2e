import{Page,expect} from "@playwright/test";


export class StoreLocatorPage{    
    private page: Page;
    private carryOutButton;
    private deliveryButton;
    private storeLocatorHeader;
    private addressType;
    private streetAddress;
    private suite;
    private zipCode;
    private city;
    private state;
   
      
  
    constructor(page: Page) {
        this.page = page;
        this.carryOutButton = this.page.locator('#tab-Carryout');
        this.deliveryButton = this.page.locator('#tab-Delivery');
        this.storeLocatorHeader = this.page.locator('h1:has-text("Store Locator")');
        this.addressType = this.page.locator('#Type');
         this.suite = this.page.locator('#UnitNumber');
        this.zipCode = this.page.locator('#PostalCode');
        this.city = this.page.locator('#City');
        this.state = this.page.locator('#State');        
        this.streetAddress = this.page.locator('#Region');
      

    }

    async verifyStoreLocatorPageTitle() {
    const title = await this.page.title();
    expect(title).toContain("Pizza Delivery & Carryout, Pasta, Chicken & More | Domino's");
   }

    async continueForDelivery() {
        expect(this.storeLocatorHeader).toBeVisible();
        expect(this.deliveryButton).toBeFocused();
        await this.addressType.selectOption('Home');
        await this.streetAddress.fill('8387 Chatham dr');
        await this.suite.fill('Apt 1');
        await this.zipCode.fill('48170');
        await this.city.fill('Plymouth');
        await this.state.selectOption('MI');       
        await this.deliveryButton.click();
    }

   }    