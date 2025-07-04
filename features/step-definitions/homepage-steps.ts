import { Given,When,Then } from "@cucumber/cucumber";
import { setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorldImpl } from '../../support/world'; // adjust path if needed

setDefaultTimeout(60 * 1000);
/***imp - 'this' implicitly has type 'any' — is happening because 
 TypeScript doesn't know your step definition file is using CustomWorldImpl
  as the type of this. */

Given('I navigate to the Dominos homepage', async function (this: CustomWorldImpl) { 
  await this.poManager.getHomePage().navigateToHomepage();
});

Then('I should see the correct page title', async function (this: CustomWorldImpl) {  
  await this.poManager.getHomePage().verifyHomePageTitle(
    "Pizza Delivery & Carryout, Pasta, Chicken & More | Domino's"
  );
});


When('I accept cookies if present', async function (this: CustomWorldImpl) { 
  await this.poManager.getHomePage().acceptCookies();
});

Then('I click on the {string} button', async function (this: CustomWorldImpl, buttonName: string) { 
  if (buttonName.toLocaleLowerCase() === "delivery" ){
    await this.poManager.getHomePage().clickDeliveryButton();
  } else if (buttonName.toLocaleLowerCase() === "order online") {
    await this.poManager.getHomePage().clickOrderOnline();
  } else if (buttonName.toLocaleLowerCase() === "carryout") {
    await this.poManager.getHomePage().clickCarryoutButton();
  } else {
    throw new Error(`Unknown button: ${buttonName}`);
  }
  
  
});

Then('I should be redirected to the order page', async function (this: CustomWorldImpl) {
   await this.poManager.getStoreLocatorPage().verifyStoreLocatorPageTitle();
});

Then('I close the browser', async function (this: CustomWorldImpl) {
  await this.poManager.closeBrowser();
});

function Before(arg0: () => Promise<void>) {
  throw new Error("Function not implemented.");
}

