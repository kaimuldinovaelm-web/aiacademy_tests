import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ChatPage extends BasePage {
  private readonly authPageLocator: Locator;
  private readonly wildHeaderLocator: Locator;
  private readonly newChatOnMainPageButton: Locator;
  private readonly messagesLocator: Locator;
  private readonly footerLocator: Locator;
  private readonly questionsGridLocator: Locator;
  private readonly composerLocator: Locator;
  private readonly addButtonLocator: Locator;
  private readonly textFilesButtonLocator: Locator;
  private readonly textBoxModalWindow: Locator;
  private readonly closeButton: Locator;
  private readonly searchButtonLocator: Locator;
  private readonly thinkingButtonLocator: Locator;
  private readonly navScrollLocator: Locator;
  private readonly showMoreButtonLocator: Locator;
  private readonly createImagesButtonLocator: Locator;
  private readonly modelsSettingsButtonLocator: Locator;
  private readonly newChatButtonLocator: Locator;
  private readonly searchHistoryLocator: Locator;
  private readonly conservationsLocator: Locator;
  private readonly optionsButton: Locator;
  private readonly userMenuButton: Locator;
  private readonly userMenuLocator: Locator;
  private readonly leftHandleButton: Locator;
  private readonly rightHandleButton: Locator;
  constructor(page: Page) {
    super(page);
    this.authPageLocator = this.page.getByRole('main');
    this.wildHeaderLocator = this.page.locator('#wide-header');
    this.newChatOnMainPageButton = this.page.getByRole('link', { name: 'Новый чат' });
    this.messagesLocator = this.page.locator('#messages');
    this.footerLocator = this.page.locator('.footer');
    this.questionsGridLocator = this.page.locator('[class~="grid"]'); //проверить как работает локатор
    this.composerLocator = this.page.locator('#composer');
    this.addButtonLocator = this.page.locator('#attach-button');
    this.textFilesButtonLocator = this.page.locator('#textfiles-button');
    this.textBoxModalWindow = this.page.locator('#textfiles-modal');
    this.closeButton = this.page.getByRole('button', { name: 'Закрыть' });
    this.searchButtonLocator = this.page.locator('#search-button');
    this.thinkingButtonLocator = this.page.locator('thinking-button');
    this.navScrollLocator = this.page.locator('#nav-scrollable');
    this.showMoreButtonLocator = this.page.getByRole('button', { name: 'Показать все' });
    this.createImagesButtonLocator = this.page.getByRole('button', {
      name: 'Создание изображений',
    });
    this.modelsSettingsButtonLocator = this.page.getByRole('button', {
      name: 'Создание изображений',
    });
    this.newChatButtonLocator = this.page.getByRole('link', { name: 'Новый', exact: true });
    this.searchHistoryLocator = this.page.getByRole('textbox', { name: 'Поиск' });
    this.conservationsLocator = this.page.locator('#conservations');
    this.optionsButton = this.page.getByRole('button', { name: 'Опции' });
    this.userMenuButton = this.page.getByRole('button', { name: 'ПA Пользователь AIAcademy' });
    this.userMenuLocator = this.page.locator('[class~="dropdown"]'); //тут можно спэншот сделать
    this.leftHandleButton = this.page.locator('#left-handle');
    this.rightHandleButton = this.page.locator('#right-handle');
  }
  async open() {
    await this.page.goto('https://chat.aiacademy.me/login');
    await this.page.getByRole('textbox', { name: 'Email адрес' }).click();
    await this.page
      .getByRole('textbox', { name: 'Email адрес' })
      .fill('elmira.kaimuldinova@mail.ru');
    await this.page.getByRole('textbox', { name: 'Пароль' }).click();
    await this.page.getByRole('textbox', { name: 'Пароль' }).fill('26112107Rr*');
    await this.page.getByRole('button', { name: 'Войти' }).click();
  }
  async authPageHasCorrectAreaSnapshot(screenshotName: string) {
    await expect(this.authPageLocator).toMatchAriaSnapshot({ name: 'authPageAreaSnapshot.yml' });
  }
  //actions
  //проверка кликабельности кнопки "Новый чат" в хедере
  async newChatOnMainPageButtonClick() {
    await this.newChatOnMainPageButton.click();
  }
  //проверка кликабельности кнопки добавления файла в поле ввода
  async addButton() {
    await expect(this.addButtonLocator).toBeVisible();
  }
  //проверка кликабельности кнопки добавление текстового файла
  async textFilesButtonClick() {
    await this.textFilesButtonLocator.click();
  }
  async textBoxVisibility() {
    await expect(this.textBoxModalWindow).toBeVisible();
  }
  async closeButtonClick() {
    await this.closeButton.click();
  }
  //проверка кликабельности кнопки поиска в поле ввода
  async searchButtonClick() {
    await this.searchButtonLocator.click();
  }
  //проверка кликабельности кнопки размышления
  async thinkingButtonClick() {
    await this.thinkingButtonLocator.click();
  }
  //проверка кнопки "Показать больше" в боковом меню
  async showMoreButtonClick() {
    await this.showMoreButtonLocator.click();
  }
  //проверка кнопки "Создать изображение" в боковом меню
  async createImageButtonClick() {
    await this.createImagesButtonLocator.click();
  }
  //проверка кнопки "Настройки модели"
  async modelSettingsButtonClick() {
    await this.modelsSettingsButtonLocator.click();
  }
  //проверка кнопки создания нового чата в боковом меню
  async newChatButtonClick() {
    await this.newChatButtonLocator.click();
  }
  //проверка кнопки "Опции" в боковом меню в истории
  async optionsButtonClick() {
    await this.optionsButton.click();
  }
  //проверка кнопки меню пользователя
  async userMenuButtonClick() {
    await this.userMenuButton.click();
  }
  //проверка кнопки закрытия боковой панели
  async leftHandleButtonClick() {
    await this.leftHandleButton.click();
  }
  //проверка кнопки открытия боковой панели
  async rightHandleButtonClick() {
    await this.rightHandleButton.click();
  }
  //assertions
  //header
  async headerHasCorrectAreaSnapshot() {
    await expect(this.wildHeaderLocator).toMatchAriaSnapshot({ name: 'headerSnapshot.yml' });
  }
  //проверка основной области чата
  async messageHasCorrectAreaSnapshot() {
    await expect(this.messagesLocator).toMatchAriaSnapshot({ name: 'messageSnapshot.yml' });
  }
  //проверка футера
  async footerHasCorrectAreaSnapshot() {
    await expect(this.footerLocator).toMatchAriaSnapshot({ name: 'footerSnapshot.yml' });
  }
  //проверка наличия отображения сетки с примерами запросов
  async questionsGridHasCorrectAreaSnapshot() {
    await expect(this.questionsGridLocator).toMatchAriaSnapshot({
      name: 'questionsGridSnapshot.yml',
    });
  }
  //проверка поля ввода
  async composerHasCorrectAreaSnapshot() {
    await expect(this.composerLocator).toMatchAriaSnapshot({ name: 'composerSnapshot.yml' });
  }
  //проверка отображения навигационной панели
  async navScrollHasCorrectAreaSnapshot() {
    await expect(this.navScrollLocator).toMatchAriaSnapshot({ name: 'navScrollSnapshot.yml' });
  }
  //проверка поля поиска в истории
  async searchHistoryIsCorrect() {
    await expect(this.searchHistoryLocator).toBeVisible();
  }
  //проверка корректности отображения истории
  async conversationHasCorrectAreaSnapshot() {
    await expect(this.conservationsLocator).toMatchAriaSnapshot({ name: 'conversionSnapshot.yml' });
  }
  //проверка корректности отображения меню юзера
  async userMenuHasCorrectAreaSnapshot() {
    await expect(this.userMenuLocator).toMatchAriaSnapshot({ name: 'userMenuSnapshot.yml' });
  }
}
