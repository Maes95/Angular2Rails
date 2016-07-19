export class DreamCarsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dream-cars-app h1')).getText();
  }
}
