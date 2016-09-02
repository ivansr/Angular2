import { Pruebas1Page } from './app.po';

describe('pruebas1 App', function() {
  let page: Pruebas1Page;

  beforeEach(() => {
    page = new Pruebas1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
