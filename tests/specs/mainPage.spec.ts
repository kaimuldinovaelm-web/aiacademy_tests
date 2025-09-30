import { test, expect } from '../fixtures/fixtures';
import { MainPage } from '../pages/MainPage';

test('Header elements visibility test', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAreaSnapshot();
});
test('Introduse block visibility test', async ({ mainPage }) => {
  await mainPage.introduceHasCorrectAreaSnapshot();
});
test('GPT 5 capabilities description test', async ({ mainPage }) => {
  await mainPage.examplesHasCorrectAreaSnapshot();
});
test('Pricing block test', async ({ mainPage }) => {
  await mainPage.pricingCardHasCorrectAreaSnapshot();
  await mainPage.studentPriceButtonCheck();
  await mainPage.open();
  await mainPage.basicPriceButtonCheck();
  await mainPage.open();
  await mainPage.recomendedPriceButtonCheck();
});
test('Advantages description test', async ({ mainPage }) => {
  await mainPage.advantagesBlockHasCorrectAreaSnapshot();
});
test('Updates block test', async ({ mainPage }) => {
  await mainPage.updatesBlockHasCorrectAreaSnapshot();
  await mainPage.updatesButtonCheck();
});
test('Popular questions test', async ({ mainPage }) => {
  await mainPage.popQuestionsBlockHasCorrectSnapshots();
  await mainPage.popQuestionsButtonCheck();
  await mainPage.popQuestionsButtonCheck();
});
test('Write us form test', async ({ mainPage }) => {
  await mainPage.writeUsBlockHasCorrectAreaSnapshot();
});
test('Footer visibility test', async ({ mainPage }) => {
  await mainPage.footerHasCorrectAreaSnapshot();
});
test('Models button and list test', async ({ mainPage }) => {
  await mainPage.modelsButtonCheck();
  await mainPage.modelsListHasCorrectAreaSnapshot();
});
test('Blog button and list test', async ({ mainPage }) => {
  await mainPage.blogButtonCheck();
  await mainPage.blogListHasCorrectAreaSnapshot();
});
