import test from '@playwright/test';
import { BlogPage } from '../pages/BlogPage';

BlogPage.testParametres.forEach(({ url, screenshotName, name }) => {
  test(`${name} page test`, async ({ page }) => {
    const blogPage = new BlogPage(page);
    await blogPage.open(url);
    await blogPage.pageHasCorrectLayout(screenshotName);
  });
});
