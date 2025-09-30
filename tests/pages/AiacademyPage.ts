import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AiacademyPage extends BasePage {
  static readonly testParametres = [
    {
      url: 'https://aiacademy.me/openai-academy',
      screenshotName: 'Aiacademy.png',
      name: 'Aiacademy',
    },
  ];
  private readonly aiacademyPageLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.aiacademyPageLocator = this.page.locator('.t-body');
  }
  async open(url: string) {
    await this.page.goto(url);
  }
  async pageHasCorrectLayout(screenshotName: string) {
    await this.checkLayoutByScreenshot(this.aiacademyPageLocator, screenshotName);
  }
}
