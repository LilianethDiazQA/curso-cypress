export class CartElements{
    static get buttons(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]');
            },
        };
    }
/* Para encontrar este elemento se transformo el xpath del boton delete de la siguiente manera: se ubico el boton , luego el nombre del producto. Con closets se pide que se mueva al ancestro
y por ultimo se pide ir a los descendentes con find */
    static get links (){
        return{
             delete(productName){
                return  cy.contains('td',productName).closest("tr").find("a");
        }
       
        }

    }
}