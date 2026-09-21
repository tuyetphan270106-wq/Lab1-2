import React from 'react'
import { products } from './data/products.js'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
function ProductList() {
    return (
        <>
            <Container >
                <h2 className='mt-3 mb-3'>Danh sach cac users: </h2>
                <Row>
                    {products.map((product) => (

                        <Col key={product.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.price} <br />  {product.status} <br />
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ProductList
