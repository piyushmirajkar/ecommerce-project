import { useState } from 'react'

const menProductNames = [
  'Classic Tee', 'Oxford Shirt', 'Chino Pants', 'Hoodie', 'Denim Jacket', 'Polo Shirt',
  'Slim Fit Tee', 'Cotton Shirt', 'Cargo Pants', 'Crew Neck Sweatshirt', 'Leather Jacket',
  'Woven Overshirt', 'Striped Tee', 'Casual Shirt', 'Pleated Trousers', 'Zip Hoodie',
  'Utility Jacket', 'Linen Shirt', 'Relaxed Jeans', 'Athletic Tee', 'Work Shirt', 'Track Pants',
  'Quarter Zip', 'Bomber Jacket', 'Standing Collar Shirt', 'Graphic Tee', 'Wool Blazer',
  'Knit Polo', 'Tailored Trouser', 'Pocket Tee', 'Fleece Hoodie', 'Cotton Trouser',
  'Classic Bomber', 'Jersey Tee', 'Rugged Jacket', 'Slim Chinos', 'Formal Shirt', 'Harrington Coat',
  'Marled Tee', 'Navy Shirt', 'Soft Knit Pullover', 'Layered Jacket', 'Storm Shell', 'Urban Tee'
]

const menColors = ['Black', 'Navy', 'Stone', 'Olive', 'Charcoal', 'Sand', 'White', 'Indigo']

const menImagePool = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80'
]

const menCatalog = Array.from({ length: 40 }, (_, index) => {
  const name = menProductNames[index % menProductNames.length]
  const color = menColors[index % menColors.length]
  const basePrice = 600 + ((index * 120) % 2400)
  return {
    name: `${color} ${name}`,
    category: 'men',
    price: `₹${basePrice.toLocaleString('en-IN')}`,
    tag: index % 4 === 0 ? 'New' : index % 4 === 1 ? 'Popular' : index % 4 === 2 ? 'Best Seller' : 'Top Rated',
    image: menImagePool[index % menImagePool.length],
  }
})

const menCategory = {
  id: 'men',
  title: 'Men',
  subtitle: 'Tailored essentials',
  action: 'Shop men',
  accent: '#2563eb',
  soft: '#dbeafe',
}

export default function Men({ setPage, onAddToCart }) {
  return (
    <section className="feature-page">
      <div className="feature-banner" style={{ '--page-accent': menCategory.accent, '--page-soft': menCategory.soft }}>
        <div>
          <p className="eyebrow">Collection</p>
          <h2>{menCategory.title}</h2>
          <p>{menCategory.subtitle}</p>
        </div>
        <button type="button" className="primary-btn" onClick={() => setPage('home')}>Back to home</button>
      </div>

      <div className="feature-grid">
        {menCatalog.map((product) => (
          <article className="product-item feature-item" key={product.name}>
            <div className="product-image" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span>{product.tag}</span>
            </div>
            <div className="product-info">
              <p>{menCategory.title}</p>
              <h3>{product.name}</h3>
              <div className="product-meta">
                <strong>{product.price}</strong>
                <button type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
