import React from 'react'
import products from '../data/product.js'
import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'

function ProductList({ cart = [], onAddToCart }) {
    return (
        <>
            <Container>
                <h2 className='mt-3 mb-3 text-white'>Danh sách sản phẩm: </h2>
                <Row>
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            cart={cart} 
                            onAddToCart={onAddToCart} 
                        />
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ProductList
