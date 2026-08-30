import { useState } from 'react'

const saleImagePool = [
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
]

const salesCatalog = Array.from({ length: 10 }, (_, index) => {
  const productNames = ['Urban Tee', 'Weekend Shirt', 'Relaxed Pants', 'Sunset Dress', 'Street Runner', 'Layer Knit', 'Beach Slide', 'Warm Hoodie', 'City Blazer', 'Classic Sneaker']
  const originalMap = [1299, 1899, 2299, 2599, 3199, 2099, 1599, 2499, 3499, 2899]
  const discountMap = [40, 35, 45, 40, 35, 45, 40, 35, 45, 40]
  const salePrice = Math.round(originalMap[index] * (1 - discountMap[index] / 100))
  return {
    name: productNames[index],
    category: 'sales',
    price: `₹${salePrice.toLocaleString('en-IN')}`,
    originalPrice: `₹${originalMap[index].toLocaleString('en-IN')}`,
    discount: `${discountMap[index]}% OFF`,
    tag: index % 2 === 0 ? 'Sale' : 'Limited',
    image: saleImagePool[index],
  }
})

const salesCategory = {
  id: 'sales',
  title: 'Sales',
  subtitle: 'Up to 60% off',
  action: 'Explore deals',
  accent: '#f59e0b',
  soft: '#fef3c7',
}

export default function Sales({ setPage }) {
  return (
    <section className="feature-page">
      <div className="feature-banner" style={{ '--page-accent': salesCategory.accent, '--page-soft': salesCategory.soft }}>
        <div>
          <p className="eyebrow">Collection</p>
          <h2>{salesCategory.title}</h2>
          <p>{salesCategory.subtitle}</p>
        </div>
        <button type="button" className="primary-btn" onClick={() => setPage('home')}>Back to home</button>
      </div>

      <div className="feature-grid">
        {salesCatalog.map((product) => (
          <article className="product-item feature-item" key={product.name}>
            <div className="product-image" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span className="sale-tag">{product.discount}</span>
            </div>
            <div className="product-info">
              <p>{salesCategory.title}</p>
              <h3>{product.name}</h3>
              <div className="product-meta sale-meta">
                <div className="price-group">
                  <strong>{product.price}</strong>
                  <span className="old-price">{product.originalPrice}</span>
                </div>
                <button type="button">Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
