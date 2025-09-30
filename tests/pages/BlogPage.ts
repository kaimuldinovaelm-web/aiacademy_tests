import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BlogPage extends BasePage {
  static readonly testParametres = [
    {
      url: 'https://aiacademy.me/blog',
      screenshotName: 'blog.png',
      name: 'Blog',
    },
  ];
  private readonly blogLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.blogLocator = this.page.locator('.t-body');
  }
  async open(url: string) {
    await this.page.goto(url);
  }
  async pageHasCorrectLayout(screenshotName: string) {
    await this.checkLayoutByScreenshot(this.blogLocator, screenshotName);
  }
}
