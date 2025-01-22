import { useState } from "react";

export const SearchItem = ({ setFilteredProducts, allProducts }) => {
    const [searchProduct, setSearchProduct] = useState("");

 
    const handleSearch = () => {
        
        const filteredProduct = allProducts.filter(product =>
            product.title.toLowerCase() === searchProduct.toLowerCase() 
        );
        setFilteredProducts(filteredProduct);
    };

  
    const handleHomeClick = () => {
        setFilteredProducts(allProducts);
        setSearchProduct(""); 
    };

    return (
        <div className = "search-item">
            <button className ="home-link" onClick= {handleHomeClick}>
                Home
            </button>
            <input
                className= "input"
                type="text"
                placeholder="Search product"
                value ={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)} 
            />
            <button className= "search-btn" onClick = {handleSearch} >
                Search
            </button>
        </div>
    );
};



