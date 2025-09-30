import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AuthPage extends BasePage {
  static readonly testParametres = [
    {
      url: 'https://chat.aiacademy.me/login',
      screenshotName: 'AuthPage.yml',
      name: 'Auth',
    },
  ];
  private readonly authPageLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.authPageLocator = this.page.getByRole('main');
  }
  async open(url: string) {
    await this.page.goto('https://chat.aiacademy.me/login');
  }
  async authPageHasCorrectAreaSnapshot(screenshotName: string) {
    await expect(this.authPageLocator).toMatchAriaSnapshot({ name: 'authPageAreaSnapshot.yml' });
  }
}
