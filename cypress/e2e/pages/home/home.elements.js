export class HomeElements{
    static get categoriesMenu(){
        return{
            get phone (){
                return cy.contains('a', 'Phones')
            },
            get laptots(){
                return cy.contains('a', 'Laptops')
            },
            get monitor(){
                return cy.contains('a', 'Monitors')
            }

        }
    }

    static product (productName){
        return cy.contains ("a",productName);
}
}