@smoke
Feature: Domino's Homepage
  As a customer
  I want to navigate the Domino's homepage
  So that I can order pizza
 
  Scenario: 
    Given I navigate to the Dominos homepage
    Then I should see the correct page title
    When I accept cookies if present
    Then I click on the "ORDER ONLINE" button
    Then I should be redirected to the order page
    Then I close the browser


  Scenario: Customer can see current promotions
  Given I navigate to the Dominos homepage
  Then I should see all the deals and promotions 
  Then I close the browser