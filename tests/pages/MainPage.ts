import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly introduceBlockLocator: Locator;
  private readonly examplesLocator: Locator;
  private readonly pricingCardsBlockLocator: Locator;
  private readonly studentPriceButton: Locator;
  private readonly basicPriceButton: Locator;
  private readonly recomendedPriceButton: Locator;
  private readonly footnoteLocator: Locator;
  private readonly corporateBlock: Locator;
  private readonly advantagesLocator: Locator;
  private readonly updatesLocator: Locator;
  private readonly popQuestionsButton: Locator;
  private readonly addQuestionsForm: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('.t481__maincontainer ');
    this.introduceBlockLocator = this.page.locator('#rec687400963').first();
    this.examplesLocator = this.page.locator('#rec700769563');
    this.pricingCardsBlockLocator = this.page
      .locator('#rec1191218956 div')
      .filter({
        hasText: 'Выберите ваш уровень доступа к ИИ Студенческий Используете ИИ для простых задач ',
      })
      .nth(2);
    this.studentPriceButton = this.page.getByRole('button', {
      name: 'Попробовать за 1 ₽ на 3 дня далее 279 ₽ каждый месяц',
    });
    this.basicPriceButton = this.page.getByRole('button', {
      name: 'Попробовать за 1 ₽ на 3 дня далее 1 290 ₽ каждый месяц',
    });
    this.recomendedPriceButton = this.page.getByRole('button', {
      name: 'Попробовать за 1 ₽ на 3 дня далее 2 490 ₽ каждый месяц',
    });
    this.footnoteLocator = this.page.locator('.pricing-footnote').first();
    this.corporateBlock = this.page.locator(
      '#rec846243246 > .t396 > .t396__artboard > .t396__filter',
    );
    this.advantagesLocator = this.page.locator('#rec687400972');
    this.updatesLocator = this.page.locator('#rec863846516');
    this.popQuestionsButton = this.page.locator('.t585__trigger-button').first();
    this.addQuestionsForm = this.page.locator('#rec687400975');
  }
  async open() {
    await this.page.goto('https://aiacademy.me/');
  }
  //assertions
  async headerHasCorrectAreaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }
  async introduceHasCorrectAreaSnapshot() {
    await expect(this.introduceBlockLocator).toMatchAriaSnapshot();
  }
  async examplesHasCorrectAreaSnapshot() {
    await expect(this.examplesLocator).toMatchAriaSnapshot();
  }
  async pricingCardHasCorrectAreaSnapshot() {
    await expect(this.pricingCardsBlockLocator).toMatchAriaSnapshot();
  }
  async footnoteHasCorrectAreaSnapshot() {
    await expect(this.footnoteLocator).toMatchAriaSnapshot();
  }
  async corporateBlockHasCorrectAreaSnapshot() {
    await expect(this.corporateBlock).toMatchAriaSnapshot();
  }
  async advantagesBlockHasCorrectAreaSnapshot() {
    await expect(this.advantagesLocator).toMatchAriaSnapshot();
  }
  async updatesBlockHasCorrectAreaSnapshot() {
    await expect(this.updatesLocator).toMatchAriaSnapshot();
  }
  async addQuestionsBlockHasCorrectAreaSnapshot() {
    await expect(this.addQuestionsForm).toMatchAriaSnapshot();
  }
}
