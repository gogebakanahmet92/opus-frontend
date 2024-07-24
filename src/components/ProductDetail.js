import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const product = products.find(product => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <section className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
        </section>
    );
};

export default ProductDetail;
