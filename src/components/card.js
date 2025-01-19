import { useState, useEffect } from "react";
import { ProductsApi } from "../apis/products.api";
import { baseUrl } from "../apis/constant";



const api = new ProductsApi(`${baseUrl}products`);

export const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       
        api.getProducts()
            .then(data => {
                if (data && data.products) {
                    setData(data.products);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); 

    
  
   
    return (
        <div className="card-container">
            <div className="card-header">
                <small className="card__content">Popular Products</small>
                <h2 className="card__title">Trending Now</h2>
            </div>

            <div className="card-body">
                {data.map(product => (
                    <div className="card-body-item" key={product.id} >
                        <img src={product.images[0]} className="image" alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <i className ="fa-solid fa-star" style={{ color: 'gold' }} id={`star-${product.id}`}></i>
            
                        <button className="btn" onClick= {(ev) => {
                            const starIcon = document.getElementById(`star-${product.id}`);
                            starIcon.style.color = starIcon.style.color === "green" ? "" : "green";
                            ev.target.innerText = ev.target.innerText === "Add" ? "Remove" : "Add";
                        }}>Add</button>
                    </div>
                ))}
            </div>
        </div>
    );


};
