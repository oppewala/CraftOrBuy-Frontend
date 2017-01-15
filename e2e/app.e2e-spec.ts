import { CraftorbuyPage } from './app.po';

describe('craftorbuy App', function() {
  let page: CraftorbuyPage;

  beforeEach(() => {
    page = new CraftorbuyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
