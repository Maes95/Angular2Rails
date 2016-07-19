import { DreamCarsPage } from './app.po';

describe('dream-cars App', function() {
  let page: DreamCarsPage;

  beforeEach(() => {
    page = new DreamCarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dream-cars works!');
  });
});
