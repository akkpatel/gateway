import { PurchasereportModule } from './purchasereport.module';

describe('PurchasereportModule', () => {
  let purchasereportModule: PurchasereportModule;

  beforeEach(() => {
    purchasereportModule = new PurchasereportModule();
  });

  it('should create an instance', () => {
    expect(purchasereportModule).toBeTruthy();
  });
});
