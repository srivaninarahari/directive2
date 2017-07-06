import { Direcr2Page } from './app.po';

describe('direcr2 App', () => {
  let page: Direcr2Page;

  beforeEach(() => {
    page = new Direcr2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
