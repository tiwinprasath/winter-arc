import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Service from './pages/Service'
import Register from './hooks/Register'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<main className="simple-page"><Register /></main>} />
        <Route path="*" element={<main><h1>Page not found</h1><Link to="/">Back to home</Link></main>} />
      </Routes>
    </div>
  )
}

export default App

