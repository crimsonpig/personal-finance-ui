import { PersonalFinanceUiPage } from './app.po';

describe('personal-finance-ui App', () => {
  let page: PersonalFinanceUiPage;

  beforeEach(() => {
    page = new PersonalFinanceUiPage();
  });

  it('should display main heading "Personal Finance Application"', () => {
    page.navigateTo();
    expect(page.getMainPageHeader()).toEqual('Personal Finance Application');
  });
});
