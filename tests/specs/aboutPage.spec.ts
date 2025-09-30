import { test } from '../fixtures/fixtures';

test('Heading test', async ({ aboutPage }) => {
  await aboutPage.headingTitleCheck();
});
test('Info block test', async ({ aboutPage }) => {
  await aboutPage.infoBlockCheck();
});
test('First face test', async ({ aboutPage }) => {
  await aboutPage.firstFaceCheck();
});
test('Second face test', async ({ aboutPage }) => {
  await aboutPage.secondFaceCheck();
});
