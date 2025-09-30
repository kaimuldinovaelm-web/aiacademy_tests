import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AboutPage extends BasePage {
  private readonly headingTitle: Locator;
  private readonly infoBlock: Locator;
  private readonly firstBlock: Locator;
  private readonly secondBlock: Locator;
  constructor(page: Page) {
    super(page);
    this.headingTitle = this.page.getByRole('heading', { name: 'О проекте Ai Academy' });
    this.infoBlock = this.page.locator('#rec766577566');
    this.firstBlock = this.page.locator('#rec766578707');
    this.secondBlock = this.page.locator('#rec766578798');
  }
  async open() {
    await this.page.goto('https://aiacademy.me/about');
  }
  async headingTitleCheck() {
    await expect(this.headingTitle).toMatchAriaSnapshot({ name: 'headingAreaSnapshot.yml' });
  }
  async infoBlockCheck() {
    await expect(this.infoBlock).toMatchAriaSnapshot({ name: 'infoBlockAreaSnapshot.yml' });
  }
  async firstFaceCheck() {
    await expect(this.firstBlock).toMatchAriaSnapshot({ name: 'firstFaceAreaSnapshot.yml' });
  }
  async secondFaceCheck() {
    await expect(this.secondBlock).toMatchAriaSnapshot({ name: 'secondFaceAreaSnapshot.yml' });
  }
}
