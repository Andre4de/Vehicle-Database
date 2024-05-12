import exp from 'constants';

const { test, expect } = require('@playwright/test');
const websiteURL = 'http://127.0.0.1:3000/index.html';

test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
 });
// add a vehicle when person already exists
test('add vehicle owner exists', async ({page}) => {
    await page.getByRole('link', { name: 'Add a vehicle' }).click();
    await page.locator('#rego').fill('LKJ23UO')
    await page.locator('#make').fill('Ferrai')
    await page.locator('#model').fill('F50')
    await page.locator('#colour').fill('red')
    await page.locator('#owner').fill('Rachel Smith')
    await page.getByRole('button', { name: 'Add vehicle' }).click();
    await expect(page.locator('#message')).toContainText('Vehicle added successfully')
 
    await page.getByRole('link', { name: 'Vehicle search' }).click();
    await page.locator('#rego').fill('LKJ23UO')
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#results')).toContainText('Ferrai')
    await expect(page.locator('#results').locator('div')).toHaveCount(1)
    await expect(page.locator('#message')).toContainText('Search successful')
 })

 // search for a person who does not exist
test('search person doesnt exist', async ({page}) => {
    await page.locator('#name').fill('Alan Turing')
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#message')).toContainText('No result found.')
 })

  // input for both drive name and license should result in an error message
test('input in both license and drive name', async ({page}) => {
    await page.locator('#name').fill('rachel')
    await page.locator('#license').fill('GHT56FN')
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#message')).toContainText('Error')
 })

   // missing data
test('missing data', async ({page}) => {
    await page.getByRole('link', { name: 'Add a vehicle' }).click();
    await page.locator('#rego').fill('LKJ23UO')
    await page.locator('#make').fill('Toyota')
    await page.locator('#model').fill('Yaris')
    await page.locator('#owner').fill('Rachel Smith')
    await page.getByRole('button', { name: 'Add vehicle' }).click();
    await expect(page.locator('#message')).toContainText('Error')
 })