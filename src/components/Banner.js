import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'

function Banner() {
    return (
        <>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/image/banner1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>FASHION COLLECTION 2026</h3>
                                <p>Discover latest fashion tends for 2026.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/image/banner2.jpg"
                                alt="Secound slide"
                            />
                            <Carousel.Caption>
                                <h3>SUMMER SALE UP TO 50%</h3>
                                <p>Enjoy special discounts on selected products.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/image/banner3.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>NEW ARRIVALS</h3>
                                <p>Explore our newest clothing collection.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}

export default Banner
