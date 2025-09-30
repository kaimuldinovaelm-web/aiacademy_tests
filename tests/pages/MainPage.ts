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
  private readonly updatesButtonLocator: Locator;
  private readonly popQuestionsList: Locator;
  private readonly popQuestionsButton: Locator;
  private readonly writeUsForm: Locator;
  private readonly footerLocator: Locator;
  private readonly personalDataLocator: Locator;
  private readonly modelsButton: Locator;
  private readonly blogButton: Locator;
  private readonly modelsListLocator: Locator;
  private readonly blogListLocator: Locator;

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
    this.updatesButtonLocator = this.page.getByRole('button', {
      name: 'GPT-4o генерация доступна в',
    });
    this.popQuestionsList = this.page.locator('#rec687400975');
    this.popQuestionsButton = this.page.locator('.t585__trigger-button').first();
    this.writeUsForm = this.page.locator('#rec687400977');
    this.footerLocator = this.page.locator('#t-footer');
    this.personalDataLocator = this.page.locator('a[href="https://aiacademy.me/policy"]');
    this.modelsButton = this.page.getByRole('button', { name: 'Модели' }).first();
    this.blogButton = this.page.getByRole('button', { name: 'Блог' });
    this.modelsListLocator = this.page
      .getByRole('listitem')
      .filter({ hasText: 'Модели GPT' })
      .locator('div')
      .nth(2);
    this.blogListLocator = this.page
      .getByRole('listitem')
      .filter({ hasText: 'Блог Блог Ai Academy' })
      .locator('div')
      .nth(2);
  }
  async open() {
    await this.page.goto('https://aiacademy.me/');
  }
  //actions
  async studentPriceButtonCheck() {
    await this.studentPriceButton.click();
  }
  async basicPriceButtonCheck() {
    await this.basicPriceButton.click();
  }
  async recomendedPriceButtonCheck() {
    await this.recomendedPriceButton.click();
  }
  async popQuestionsButtonCheck() {
    await this.popQuestionsButton.click();
  }
  async updatesButtonCheck() {
    await this.updatesButtonLocator.click();
  }
  async personalDataButtonCheck() {
    await this.personalDataLocator.click();
  }
  async modelsButtonCheck() {
    await this.modelsButton.click();
  }
  async blogButtonCheck() {
    await this.blogButton.click();
  }

  //assertions
  async headerHasCorrectAreaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerAreaSnapshot.yml' });
  }
  async introduceHasCorrectAreaSnapshot() {
    await expect(this.introduceBlockLocator).toMatchAriaSnapshot({
      name: 'introduceAreaSnapshot.yml',
    });
  }
  async examplesHasCorrectAreaSnapshot() {
    await expect(this.examplesLocator).toMatchAriaSnapshot({ name: 'examplesAreaSnapshot.yml' });
  }
  async pricingCardHasCorrectAreaSnapshot() {
    await expect(this.pricingCardsBlockLocator).toMatchAriaSnapshot({
      name: 'pricingAreaSnapshot.yml',
    });
  }
  async footnoteHasCorrectAreaSnapshot() {
    await expect(this.footnoteLocator).toMatchAriaSnapshot({ name: 'footnoteAreaSnapshot.yml' });
  }
  async corporateBlockHasCorrectAreaSnapshot() {
    await expect(this.corporateBlock).toMatchAriaSnapshot({ name: 'corporateAreaSnapshot.yml' });
  }
  async advantagesBlockHasCorrectAreaSnapshot() {
    await expect(this.advantagesLocator).toMatchAriaSnapshot({
      name: 'advantagesAreaSnapshot.yml',
    });
  }
  async updatesBlockHasCorrectAreaSnapshot() {
    await expect(this.updatesLocator).toMatchAriaSnapshot({ name: 'updatesAreaSnapshot.yml' });
  }
  async popQuestionsBlockHasCorrectSnapshots() {
    await expect(this.popQuestionsList).toMatchAriaSnapshot({
      name: 'popQuestionsAreaSnapshot.yml',
    });
  }
  async writeUsBlockHasCorrectAreaSnapshot() {
    await expect(this.writeUsForm).toMatchAriaSnapshot({ name: 'writeAreaSnapshot.yml' });
  }
  async footerHasCorrectAreaSnapshot() {
    await expect(this.footerLocator).toMatchAriaSnapshot({ name: 'footerAreaSnapshot.yml' });
  }
  async modelsListHasCorrectAreaSnapshot() {
    await expect(this.modelsListLocator).toMatchAriaSnapshot({ name: 'modelListAreaSnapshot.yml' });
  }
  async blogListHasCorrectAreaSnapshot() {
    await expect(this.blogListLocator).toMatchAriaSnapshot({ name: 'blogListAreaSnapshot.yml' });
  }
}
