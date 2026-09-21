import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

function ProductCard({ product, cart = [], onAddToCart }) {
    const isAdded = cart.some(item => item.id === product.id);

    return (
        <Col className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.price} <br /> {product.status} <br />
                    </Card.Text>
                    <Button
                        variant={isAdded ? "secondary" : "success"}
                        disabled={isAdded}
                        onClick={() => onAddToCart(product)}
                    >
                        {isAdded ? "✓ Added to Cart" : "Add to Cart"}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard
