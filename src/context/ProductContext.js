import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'Short description of Product 1', image: 'product1.jpg' },
        { id: 2, name: 'Product 2', description: 'Short description of Product 2', image: 'product2.jpg' },
        { id: 3, name: 'Product 3', description: 'Short description of Product 3', image: 'product3.jpg' },
        { id: 4, name: 'Product 4', description: 'Short description of Product 4', image: 'product4.jpg' },
        // Add more products as needed
    ]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};
