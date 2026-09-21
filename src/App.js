import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid className='bg-dark'>
        <Header />
        <Banner />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
