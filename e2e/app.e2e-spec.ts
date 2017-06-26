import { PersonalFinanceUiPage } from './app.po';

describe('personal-finance-ui App', () => {
  let page: PersonalFinanceUiPage;

  beforeEach(() => {
    page = new PersonalFinanceUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getMainPageHeader()).toEqual('Welcome to app!!');
  });
});
