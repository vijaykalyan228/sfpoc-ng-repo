import { SfpocNgPage } from './app.po';

describe('sfpoc-ng App', () => {
  let page: SfpocNgPage;

  beforeEach(() => {
    page = new SfpocNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
