import Component from "../components/Component/Component";
import Data from "../components/Component/Data";

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
});

describe("Changes in the ITEMS field", () => {

    let itemsComponent = new Component();
    let itemsData = new Data();

    it("Changes item description", () => {
        cy.visit("https://demo.phppointofsale.com/index.php/login");
        itemsComponent.LogInButton.click();
        itemsComponent.itemsField.click();
        itemsComponent.searchField.type(itemsData.searchField + " {enter}");
        cy.wait(2000);
        itemsComponent.editButton.click();
        itemsComponent.descriptionField.clear();
        itemsComponent.descriptionField.type(itemsData.descriptionField);
        itemsComponent.category.click();
        itemsComponent.categoryName.type(itemsData.categoryName);
        itemsComponent.categoryColour.type(itemsData.categoryColour);
        itemsComponent.saveButton.click({force: true});
        cy.wait(2000);
        cy.get('#item_form').submit();
        itemsComponent.returnToItemsButton.click();

        itemsComponent.getTableResultsFirstRow.contains("Iphone 12");
        itemsComponent.getTableResultsFirstRow.find("td").eq(2).contains("120");
        itemsComponent.getTableResultsFirstRow.find("td").eq(4).contains("Iphone 12");
    });
});