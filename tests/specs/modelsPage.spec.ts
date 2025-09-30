import test from '@playwright/test';
import { ModelsPage } from '../pages/ModelsPages';

ModelsPage.testParametres.forEach(({ url, screenshotName, name }) => {
  test(`${name} page test`, async ({ page }) => {
    const modelsPage = new ModelsPage(page);
    await modelsPage.open(url);
    await modelsPage.pageHasCorrectLayout(screenshotName);
  });
});
