export class ProductDetailsElementes{
    static get buttons(){
        return{
            get addToCart(){
                cy.contains('a', 'Add to cart');
    }
    
        }
     
    }
}