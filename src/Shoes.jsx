import { useState } from 'react'

const shoeImagePool = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600673885750-5a486c99b14d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600673885750-5a486c99b14d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
]

const shoesCatalog = [
  { name: 'Cloud Step', category: 'shoes', price: '₹1,899', tag: 'New', image: shoeImagePool[0] },
  { name: 'Runner Pro', category: 'shoes', price: '₹2,499', tag: 'Popular', image: shoeImagePool[1] },
  { name: 'Street Luxe', category: 'shoes', price: '₹2,199', tag: 'Top Rated', image: shoeImagePool[2] },
  { name: 'City Walk', category: 'shoes', price: '₹1,699', tag: 'Classic', image: shoeImagePool[3] },
  { name: 'Flex Motion', category: 'shoes', price: '₹2,099', tag: 'Hot', image: shoeImagePool[4] },
  { name: 'Cozy Slide', category: 'shoes', price: '₹1,199', tag: 'New', image: shoeImagePool[5] },
  { name: 'Luna Runner', category: 'shoes', price: '₹2,299', tag: 'Popular', image: shoeImagePool[6] },
  { name: 'Sandal Breeze', category: 'shoes', price: '₹999', tag: 'Fresh', image: shoeImagePool[7] },
  { name: 'Trail Flex', category: 'shoes', price: '₹2,799', tag: 'Best Seller', image: shoeImagePool[8] },
  { name: 'Everyday Mule', category: 'shoes', price: '₹1,399', tag: 'New', image: shoeImagePool[9] },
  { name: 'Velvet Slip', category: 'shoes', price: '₹1,599', tag: 'Trending', image: shoeImagePool[10] },
  { name: 'Metro Loafer', category: 'shoes', price: '₹2,099', tag: 'Popular', image: shoeImagePool[11] },
  { name: 'Horizon Boot', category: 'shoes', price: '₹3,199', tag: 'Top Rated', image: shoeImagePool[12] },
  { name: 'Pocket Sandal', category: 'shoes', price: '₹1,099', tag: 'Deal', image: shoeImagePool[13] },
  { name: 'Sole Wave', category: 'shoes', price: '₹1,899', tag: 'Classic', image: shoeImagePool[14] },
  { name: 'Nest Slide', category: 'shoes', price: '₹899', tag: 'New', image: shoeImagePool[15] },
  { name: 'Summit Trek', category: 'shoes', price: '₹2,999', tag: 'Trending', image: shoeImagePool[16] },
  { name: 'Breeze Flip', category: 'shoes', price: '₹799', tag: 'Fresh', image: shoeImagePool[17] }
]

const shoesCategory = {
  id: 'shoes',
  title: 'Shoes',
  subtitle: 'Everyday comfort',
  action: 'Shop shoes',
  accent: '#10b981',
  soft: '#d1fae5',
}

export default function Shoes({ setPage }) {
  return (
    <section className="feature-page">
      <div className="feature-banner" style={{ '--page-accent': shoesCategory.accent, '--page-soft': shoesCategory.soft }}>
        <div>
          <p className="eyebrow">Collection</p>
          <h2>{shoesCategory.title}</h2>
          <p>{shoesCategory.subtitle}</p>
        </div>
        <button type="button" className="primary-btn" onClick={() => setPage('home')}>Back to home</button>
      </div>

      <div className="feature-grid">
        {shoesCatalog.map((product) => (
          <article className="product-item feature-item" key={product.name}>
            <div className="product-image" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span>{product.tag}</span>
            </div>
            <div className="product-info">
              <p>{shoesCategory.title}</p>
              <h3>{product.name}</h3>
              <div className="product-meta">
                <strong>{product.price}</strong>
                <button type="button">Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
