import { useState } from "react";
import {data} from "../data/data.js";
import {SearchItem }from "../components/searchItem.js"


export const Card = () =>{
    const [filteredProducts, setFilteredProducts] = useState(data);
    return (
        <div className="card-container">
            <SearchItem setFilteredProducts ={setFilteredProducts}  allProducts = {data} />
    
            

            <div className="card-header">
                <small className="card__content">Popular Products</small>
                <h2 className="card__title"> Trending Now</h2>
            </div>
            
            <div className="card-body">
                 {filteredProducts.map(product => (
                    
                    
                     <div className="card-body-item" key ={product.id} >
                         <img src={product.image} className= "image" alt={product.name} />
                         <h3>{product.title}</h3>
                         <p>{product.description}</p>
                         <p>${product.price}</p>
                         <i className ="fa-solid fa-star" style = {{ color: 'gold' }} id = {`star-${product.id}`}></i>
            
                        <button className="btn" onClick= {(e) => {
                             const starIcon = document.getElementById(`star-${product.id}`);
                             starIcon.style.color = starIcon.style.color === "green" ? "" : "green";
                             e.target.innerText = e.target.innerText === "Add" ? "Remove" : "Add";
                        }}>Add </button>
                    </div>
                 ))}
             </div>
            
        </div>
    )

}
