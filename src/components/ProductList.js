import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import './ProductList.css';

const ProductList = () => {
    const { products } = useContext(ProductContext);

    return (
        <section className="product-list" id="products">
            <h2>Our Products</h2>
            <div className="products">
                {products.map(product => (
                    <div className="product-item" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <Link to={`/products/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductList;
