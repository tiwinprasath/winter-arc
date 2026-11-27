import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Products could not be loaded (${response.status}).`)
        }

        const data = await response.json()
        setProducts(data)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Products could not be loaded.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    getProducts()

    return () => controller.abort()
  }, [])

  return (
    <main className="products-page">
      <header className="products-header">
        <p className="products-eyebrow">Our collection</p>
        <h1>Shop products</h1>
        <p>Browse the latest picks from our store.</p>
      </header>

      {loading && <p className="products-message" role="status">Loading products…</p>}
      {error && <p className="products-message products-error" role="alert">{error}</p>}

      {!loading && !error && (
        <section className="products-grid" aria-label="Products">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img className="product-image" src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <p className="product-category">{product.category}</p>
                <h2>{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <Link className="product-link" to={`/products/${product.id}`}>
                  View product details
                </Link>
                <div className="product-meta">
                  <p className="product-price">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(product.price)}
                  </p>
                  {product.rating && (
                    <p
                      className="product-rating"
                      aria-label={`${product.rating.rate} out of 5 stars, ${product.rating.count} reviews`}
                    >
                      <span aria-hidden="true">★</span> {product.rating.rate} ({product.rating.count})
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default Products
