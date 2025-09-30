import { test } from '../fixtures/fixtures';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import { AuthPage } from '../pages/AuthPage';
//Используем код ниже для того чтобы оботйи капчу
//chromium.use(stealth());

AuthPage.testParametres.forEach(({ url, screenshotName, name }) => {
  test(`${name} page test`, async ({ page }) => {
    const authPage = new AuthPage(page);
    await authPage.open(url);
    await authPage.authPageHasCorrectAreaSnapshot(screenshotName);
  });
});

test('Authorization test', async ({ page }) => {
  //   const browser = await chromium.launch();
  //   const context = await browser.newContext();
  //   const page = await context.newPage();

  await page.goto('https://chat.aiacademy.me/login');
  await page.getByRole('textbox', { name: 'Email адрес' }).click();
  await page.getByRole('textbox', { name: 'Email адрес' }).fill('elmira.kaimuldinova@mail.ru');
  await page.getByRole('textbox', { name: 'Пароль' }).click();
  await page.getByRole('textbox', { name: 'Пароль' }).fill('26112107Rr*');
  await page.getByRole('button', { name: 'Войти' }).click();
});
