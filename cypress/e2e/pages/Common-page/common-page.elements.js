export class CommonPageElements{
    static get TopMenu (){
        return{
            get PreparaTuViaje (){
                 return cy.contains('p','¡PREPARA TU VIAJE!'); 
            },
            get ahorra (){
                return cy.contains('p',"AHORRA");
        },
            get serviciosAdicionales(){
                return cy.contains('p',"SERVICIOS ADICIONALES");
            },

            get clubMuvify(){
                return cy.contains('p',"CLUB MUVIFY");
            },

            get ayuda(){
                return cy.contains('p',"AYUDA");
            },

            get Login() {
                return cy.get('img[src="/images/icons/Unregistered-user.svg"]');
            },
            
            get logout(){
                return cy.get ('#logout2')
            }


    };
}



        static get signedUser(){
            return cy.get('a#nameofuser');
        }

}