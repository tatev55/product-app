export class ProductsApi  {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
   
    async getProducts(){
        try{
            const response = await fetch(`${this.baseUrl}`);
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const product = await response.json();
            return product;
        }catch(error){
            console.error(error);
        }
    }

    async getProductById(id){
        try{
            const response = await fetch(`${this.baseUrl}/${id}`);
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const product = await response.json();
            return product;
        }catch(error){
            console.error(error);
        }
    }
}