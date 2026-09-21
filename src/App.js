import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="App">
      <Container fluid className='bg-dark'>
        <Header cartCount={cart.length} />
        <Banner />
        <ProductList cart={cart} onAddToCart={handleAddToCart} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
