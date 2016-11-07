import { browser, element, by } from 'protractor';

export class VisDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vis-root h1')).getText();
  }
}
