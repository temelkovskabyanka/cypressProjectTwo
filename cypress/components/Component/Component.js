export default class Component {
    get LogInButton(){
        return cy.get("[type=\"submit\"]");
    }
    get itemsField(){
        return cy.get(".items");
    }
    get editButton(){
        return cy.get(".btn.btn-more.edit_action");
    }
    get descriptionField(){
        return cy.get("#description");
    }
    get submitButton(){
        return cy.get("#submitf");
    }
}