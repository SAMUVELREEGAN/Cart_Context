import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Cart from './Cart';
import { useState, createContext } from 'react';
import data from './data/AllData';
import ProductList from './ProductList';

export const cartContext = createContext();

function App() {
    const [cart, setCart] = useState([]);
    const [datas] = useState(data);

    return (
        <div className="App">
            <cartContext.Provider value={{ cart, setCart, datas }}>
                <BrowserRouter>
                    <Header cart={cart} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/:id' element={<ProductList />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </cartContext.Provider>
        </div>
    );
}

export default App;
