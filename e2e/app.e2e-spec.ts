import { InteliListPage } from './app.po';

describe('inteli-list App', function() {
  let page: InteliListPage;

  beforeEach(() => {
    page = new InteliListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
