import { RMOWebPage } from './app.po';

describe('rmo-web App', function() {
  let page: RMOWebPage;

  beforeEach(() => {
    page = new RMOWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
