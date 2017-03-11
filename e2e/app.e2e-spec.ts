import { PfclsPage } from './app.po';

describe('pfcls App', function() {
  let page: PfclsPage;

  beforeEach(() => {
    page = new PfclsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
