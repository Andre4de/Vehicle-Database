import exp from 'constants';

const { test, expect } = require('@playwright/test');
const websiteURL = 'http://127.0.0.1:3000/index.html';

test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
 });
// add a vehicle when person already exists
test('add vehicle owner exists', async ({page}) => {
    await page.getByRole('link', { name: 'Add a vehicle' }).click();
    await page.locator('#rego').fill('HK25P8')
    await page.locator('#make').fill('Ferrai')
    await page.locator('#model').fill('F50')
    await page.locator('#colour').fill('red')
    await page.locator('#owner').fill('Rachel Smith')
    await page.getByRole('button', { name: 'Add vehicle' }).click();
    await expect(page.locator('#message')).toContainText('Vehicle added successfully')
 
    await page.getByRole('link', { name: 'Vehicle search' }).click();
    await page.locator('#rego').fill('HK25P8')
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#results')).toContainText('Ferrai')
    await expect(page.locator('#results').locator('div')).toHaveCount(1)
    await expect(page.locator('#message')).toContainText('Search successful')
 })



   // check for error when form1 has missing data
test('missing data form 1', async ({page}) => {
    await page.getByRole('link', { name: 'Add a vehicle' }).click();
    await page.locator('#rego').fill('LKJ23UO')
    await page.locator('#make').fill('Toyota')
    await page.locator('#model').fill('Yaris')
    await page.locator('#owner').fill('Rachel Smith')
    await page.getByRole('button', { name: 'Add vehicle' }).click();
    await expect(page.locator('#message')).toContainText('Error')
 })

   // check for error when form2 has missing data
test('missing data form 2', async ({page}) => {
   await page.getByRole('link', { name: 'Add a vehicle' }).click();
   await page.locator('#rego').fill('PK78BV')
   await page.locator('#make').fill('BMW')
   await page.locator('#model').fill('E36')
   await page.locator('#colour').fill('white')
   await page.locator('#owner').fill('Lewis Hamilton')
   await page.getByRole('button', { name: 'Add vehicle' }).click();

      // add a new person
      await page.locator('#personid').fill('6')
      await page.locator('#name').fill('Lewis Hamilton')
      await page.locator('#dob').fill('1990-01-01')
      await page.locator('#license').fill('SD876ES')
      await page.locator('#expire').fill('2030-01-01')
      await page.getByRole('button', { name: 'Add owner' }).click();
      await expect(page.locator('#message')).toContainText('Error')
})

// check for error when creating a person with an existing id
test('add a vehicle', async ({page}) => {
   await page.getByRole('link', { name: 'Add a vehicle' }).click();
   await page.locator('#rego').fill('1')
   await page.locator('#make').fill('Mclaren')
   await page.locator('#model').fill('F1')
   await page.locator('#colour').fill('black')
   await page.locator('#owner').fill('Harry Potter')
   await page.getByRole('button', { name: 'Add vehicle' }).click();

   // add a new person
   await page.locator('#personid').fill('2')
   await page.locator('#name').fill('Harry Potter')
   await page.locator('#address').fill('England')
   await page.locator('#dob').fill('1990-01-01')
   await page.locator('#license').fill('SD876ES')
   await page.locator('#expire').fill('2030-01-01')
   await page.getByRole('button', { name: 'Add owner' }).click();

   await expect(page.locator('#message')).toContainText('Error')


})