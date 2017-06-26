import { browser, by, element } from 'protractor';

export class PersonalFinanceUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainPageHeader() {
    return element(by.css('app-root h1')).getText();
  }
}
