import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const getProduct = async () => {
      setLoading(true)
      setError('')
      setProduct(null)

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Product could not be loaded (${response.status}).`)
        }

        const data = await response.json()
        if (!data || !data.id) {
          throw new Error('Product not found.')
        }

        setProduct(data)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Product could not be loaded.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    getProduct()

    return () => controller.abort()
  }, [id])

  return (
    <main className="products-page">
      <p className="product-back-link"><Link to="/products">← Back to products</Link></p>
      {loading && <p className="products-message" role="status">Loading product…</p>}
      {error && <p className="products-message products-error" role="alert">{error}</p>}
      {product && (
        <article className="product-detail">
          <div className="product-detail-image-wrap">
            <img className="product-image" src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-content">
            <p className="product-category">{product.category}</p>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
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
      )}
    </main>
  )
}

export default ProductDetails
