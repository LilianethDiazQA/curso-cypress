export class ThankYouForYouPurchaseElements{
    static get buttons(){
        return{
            get ok(){
                return cy.contains('button', 'OK');
            },
        };
    }

    static get icons(){
        return{
            get greenCheckMark(){
                cy.get('.sa-success');
            },
        };
    }
}