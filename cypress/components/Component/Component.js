export default class Component {
    get LogInButton() {
        return cy.get("[type=\"submit\"]");
    }

    get itemsField() {
        return cy.get(".items");
    }

    get searchField() {
        return cy.get("#search");
    }

    get editButton() {
        return cy.get("#table_holder .actions .edit_action");
    }

    get category() {
        return cy.get("#add_category");
    }

    get categoryName() {
        return cy.get("#category_name");
    }
    get categoryColour(){
        return cy.get("#category_color");
    }

    get descriptionField() {
        return cy.get("#description");
    }

    get saveButton() {
        return cy.get("#submitf");
    }
    get returnToItemsButton(){
        return cy.get("[data-bb-handler=\"confirm\"]");
    }
    get getTableResultsFirstRow(){
        return cy.get("#sortable_table tbody tr").eq(0);
    }
}