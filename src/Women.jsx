import { useState } from 'react'

const womenProductNames = [
  'Floral Tee', 'Silk Shirt', 'Wide Pants', 'Knit Top', 'Denim Dress', 'Overshirt',
  'Cotton Tank', 'Wrap Shirt', 'Relaxed Trouser', 'Soft Hoodie', 'Midi Skirt', 'Print Blouse',
  'Linen Top', 'Pleated Skirt', 'Sweater Set', 'Button Shirt', 'Cropped Jacket', 'Layered Cardigan',
  'Ribbed Tee', 'Tailored Pants', 'Statement Blouse', 'Satin Dress', 'Knit Dress', 'Casual Shirt',
  'Belted Coat', 'Cropped Hoodie', 'Leather Tote', 'Flowy Skirt', 'Embroidered Top', 'Cuffed Pants',
  'Classic Dress', 'Boucle Jacket', 'Striped Top', 'Cargo Pants', 'Weekend Tee', 'Soft Knit Sweater',
  'Linen Dress', 'Dusty Shirt', 'Pleated Trouser', 'Heather Tee', 'Sleeveless Blouse', 'Ruffle Top',
  'Modern Co-ord', 'City Shirt', 'Cozy Pullover', 'Night Dress', 'Bright Tee', 'Luxe Blazer'
]

const womenColors = ['Rose', 'Ivory', 'Camel', 'Black', 'Navy', 'Lavender', 'White', 'Cream']

const womenImagePool = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
]

const womenCatalog = Array.from({ length: 40 }, (_, index) => {
  const name = womenProductNames[index % womenProductNames.length]
  const color = womenColors[index % womenColors.length]
  const basePrice = 550 + ((index * 140) % 2200)
  return {
    name: `${color} ${name}`,
    category: 'women',
    price: `₹${basePrice.toLocaleString('en-IN')}`,
    tag: index % 4 === 0 ? 'New' : index % 4 === 1 ? 'Popular' : index % 4 === 2 ? 'Trending' : 'Limited',
    image: womenImagePool[index],
  }
})

const womenCategory = {
  id: 'women',
  title: 'Women',
  subtitle: 'New season picks',
  action: 'Shop women',
  accent: '#ec4899',
  soft: '#fce7f3',
}

export default function Women({ setPage }) {
  return (
    <section className="feature-page">
      <div className="feature-banner" style={{ '--page-accent': womenCategory.accent, '--page-soft': womenCategory.soft }}>
        <div>
          <p className="eyebrow">Collection</p>
          <h2>{womenCategory.title}</h2>
          <p>{womenCategory.subtitle}</p>
        </div>
        <button type="button" className="primary-btn" onClick={() => setPage('home')}>Back to home</button>
      </div>

      <div className="feature-grid">
        {womenCatalog.map((product) => (
          <article className="product-item feature-item" key={product.name}>
            <div className="product-image" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span>{product.tag}</span>
            </div>
            <div className="product-info">
              <p>{womenCategory.title}</p>
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
