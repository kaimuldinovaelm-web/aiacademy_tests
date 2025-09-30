import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ModelsPage extends BasePage {
  static readonly testParametres = [
    {
      url: 'https://aiacademy.me/gptimage',
      screenshotName: 'gptimage.png',
      name: 'GPT image',
    },
    {
      url: 'https://aiacademy.me/api',
      screenshotName: 'api.png',
      name: 'API',
    },
    {
      url: 'https://aiacademy.me/transcribe',
      screenshotName: 'transcribe.png',
      name: 'Transcribe',
    },
    {
      url: 'https://aiacademy.me/openai-o1-o3mini',
      screenshotName: 'openai34mini.png',
      name: 'OpenAI 3 mini',
    },
    {
      url: 'https://aiacademy.me/openai-4o-4omini-gpt35',
      screenshotName: 'openai44mini.png',
      name: 'OpenAI 4 mini',
    },
    {
      url: 'https://aiacademy.me/sonnet-4',
      screenshotName: 'sonnet4.png',
      name: 'Claude Sonnet',
    },
    {
      url: 'https://aiacademy.me/gemini-flash',
      screenshotName: 'geminiflash.png',
      name: 'Gemini Flash',
    },
    {
      url: 'https://aiacademy.me/gemini-25-pro',
      screenshotName: 'gemini2pro.png',
      name: 'Gemini Pro',
    },
    {
      url: 'https://aiacademy.me/deepseek',
      screenshotName: 'deepseek.png',
      name: 'DeepSeek',
    },
    {
      url: 'https://aiacademy.me/qwen-32b',
      screenshotName: 'qwen32b.png',
      name: 'Qwen32',
    },
  ];
  private readonly gptImageLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.gptImageLocator = this.page.locator('.t-body');
  }
  async open(url: string) {
    await this.page.goto(url);
  }
  async pageHasCorrectLayout(screenshotName: string) {
    await this.checkLayoutByScreenshot(this.gptImageLocator, screenshotName);
  }
}
