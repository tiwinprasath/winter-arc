import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home-page">
      <h1>Welcome to My Store</h1>
      <p>Find something you like from our collection of products.</p>
      <div className="home-links">
        <Link to="/products">Browse products</Link>
        <Link to="/about">About us</Link>
        <Link to="/service">Our services</Link>
        <Link to="/register">Register</Link>
      </div>
    </main>
  )
}

export default Home
