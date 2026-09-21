import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <Col className='bg-dark text-light'>
                <Row>
                    <p>Student Name: Phan Thi Anh Tuyet</p>
                </Row>
                <Row>
                    <p>Student ID: HE204323</p>
                </Row>
                <Row>
                    <p>Class: SE2058 - Node JS</p>
                </Row>
                <Row>
                    <p>Email: tuyetphan@70106@gmai.com</p>
                </Row>
            </Col>
        </>
    )
}

export default Footer
