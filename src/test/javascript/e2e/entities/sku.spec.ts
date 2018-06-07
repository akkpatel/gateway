import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Sku e2e test', () => {

    let navBarPage: NavBarPage;
    let skuDialogPage: SkuDialogPage;
    let skuComponentsPage: SkuComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Skus', () => {
        navBarPage.goToEntity('sku');
        skuComponentsPage = new SkuComponentsPage();
        expect(skuComponentsPage.getTitle())
            .toMatch(/Skus/);

    });

    it('should load create Sku dialog', () => {
        skuComponentsPage.clickOnCreateButton();
        skuDialogPage = new SkuDialogPage();
        expect(skuDialogPage.getModalTitle())
            .toMatch(/Create or edit a Sku/);
        skuDialogPage.close();
    });

    it('should create and save Skus', () => {
        skuComponentsPage.clickOnCreateButton();
        skuDialogPage.setNameInput('name');
        expect(skuDialogPage.getNameInput()).toMatch('name');
        skuDialogPage.setQuantityInput('5');
        expect(skuDialogPage.getQuantityInput()).toMatch('5');
        skuDialogPage.setCurrentSalesInput('5');
        expect(skuDialogPage.getCurrentSalesInput()).toMatch('5');
        skuDialogPage.setPreviousSalesInput('5');
        expect(skuDialogPage.getPreviousSalesInput()).toMatch('5');
        skuDialogPage.setPercentChangeInput('5');
        expect(skuDialogPage.getPercentChangeInput()).toMatch('5');
        skuDialogPage.save();
        expect(skuDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class SkuComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-sku div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class SkuDialogPage {
    modalTitle = element(by.css('h4#mySkuLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));
    quantityInput = element(by.css('input#field_quantity'));
    currentSalesInput = element(by.css('input#field_currentSales'));
    previousSalesInput = element(by.css('input#field_previousSales'));
    percentChangeInput = element(by.css('input#field_percentChange'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setNameInput = function(name) {
        this.nameInput.sendKeys(name);
    };

    getNameInput = function() {
        return this.nameInput.getAttribute('value');
    };

    setQuantityInput = function(quantity) {
        this.quantityInput.sendKeys(quantity);
    };

    getQuantityInput = function() {
        return this.quantityInput.getAttribute('value');
    };

    setCurrentSalesInput = function(currentSales) {
        this.currentSalesInput.sendKeys(currentSales);
    };

    getCurrentSalesInput = function() {
        return this.currentSalesInput.getAttribute('value');
    };

    setPreviousSalesInput = function(previousSales) {
        this.previousSalesInput.sendKeys(previousSales);
    };

    getPreviousSalesInput = function() {
        return this.previousSalesInput.getAttribute('value');
    };

    setPercentChangeInput = function(percentChange) {
        this.percentChangeInput.sendKeys(percentChange);
    };

    getPercentChangeInput = function() {
        return this.percentChangeInput.getAttribute('value');
    };

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
