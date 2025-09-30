import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import { ModelsPage } from '../pages/ModelsPages';
import { BlogPage } from '../pages/BlogPage';
import { AuthPage } from '../pages/AuthPage';
import { ChatPage } from '../pages/ChatsPage';

type MyFixtures = {
  mainPage: MainPage;
  aboutPage: AboutPage;
  modelsPage: ModelsPage;
  blogPage: BlogPage;
  authPage: AuthPage;
  chatsPage: ChatPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await use(mainPage);
  },
  aboutPage: async ({ page }, use) => {
    const aboutPage = new AboutPage(page);
    await aboutPage.open();
    await use(aboutPage);
  },
  modelsPage: async ({ page }, use) => {
    const modelsPage = new ModelsPage(page);
    await use(modelsPage);
  },
  blogPage: async ({ page }, use) => {
    const blogPage = new BlogPage(page);
    await use(blogPage);
  },
  authPage: async ({ page }, use) => {
    const authPage = new AuthPage(page);
    await use(authPage);
  },
  chatsPage: async ({ page }, use) => {
    const chatsPage = new ChatPage(page);
    await chatsPage.open();
    await use(chatsPage);
  },
});
export { expect } from '@playwright/test';
