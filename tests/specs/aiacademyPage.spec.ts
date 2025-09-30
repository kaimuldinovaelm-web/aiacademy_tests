import test from '@playwright/test';
import { AiacademyPage } from '../pages/AiacademyPage';

AiacademyPage.testParametres.forEach(({ url, screenshotName, name }) => {
  test(`${name} page test`, async ({ page }) => {
    const aiacademyPage = new AiacademyPage(page);
    await aiacademyPage.open(url);
    await aiacademyPage.pageHasCorrectLayout(screenshotName);
  });
});
