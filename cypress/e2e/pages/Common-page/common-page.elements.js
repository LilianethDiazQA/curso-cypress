export class CommonPageElements{
    static get TopMenu (){
        return{
            get home (){
                return cy.contains('a',"Home");
            },
            get contact (){
                return cy.contains('a',"Contact");
        },
            get aboutUs(){
                return cy.contains('a',"AboutUs");
            },

            get cart(){
                return cy.contains('a',"Cart");
            },

            get login(){
                return cy.contains('a',"Login");
            },

            get SignUp() {
                return cy.contains('a',"Sign up");
            },

    };
}
}