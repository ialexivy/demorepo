import { VisDemoPage } from './app.po';

describe('vis-demo App', function() {
  let page: VisDemoPage;

  beforeEach(() => {
    page = new VisDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vis works!');
  });
});
