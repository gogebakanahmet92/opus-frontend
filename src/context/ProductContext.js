import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'Short description of Product 1', image: 'product1.jpg' },
        { id: 2, name: 'Product 2', description: 'Short description of Product 2', image: 'product2.jpg' },
        // Add more products as needed
    ]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};
