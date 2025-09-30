import { test } from '../fixtures/fixtures';

test('Header test', async ({ chatsPage }) => {
  await chatsPage.newChatOnMainPageButtonClick();
  await chatsPage.headerHasCorrectAreaSnapshot();
});
