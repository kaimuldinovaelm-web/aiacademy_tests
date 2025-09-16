import test from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Main page opening test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});
test('Header elements visibility test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.headerHasCorrectAreaSnapshot();
});
test('Introduse block visibility test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.introduceHasCorrectAreaSnapshot();
});
test('GPT 5 capabilities description test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.examplesHasCorrectAreaSnapshot();
});
test('Pricing block test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.pricingCardHasCorrectAreaSnapshot();
});
test('Advantages description test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.advantagesBlockHasCorrectAreaSnapshot();
});
test('Updates block test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.updatesBlockHasCorrectAreaSnapshot();
});
test('Popular questions test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.addQuestionsBlockHasCorrectAreaSnapshot();
});
