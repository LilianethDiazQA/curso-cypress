export class ThankYouForYouPurchaseElements{
    static get buttons(){
        return{
            get ok(){
        return cy.get('div.sa-confirm-button-container button');

            },
        };
    }

    static get icons(){
        return{
            get greenCheckMark(){
                return cy.get('.sa-success');
            },
        };
    }
}