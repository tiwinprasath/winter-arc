import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="site-name" to="/">My Store</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar