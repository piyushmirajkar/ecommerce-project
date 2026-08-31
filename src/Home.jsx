const categories = [
  { id: 'men', title: 'Men', subtitle: 'Tailored essentials', action: 'Shop men', accent: '#2563eb', soft: '#dbeafe', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
  { id: 'women', title: 'Women', subtitle: 'New season picks', action: 'Shop women', accent: '#ec4899', soft: '#fce7f3', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
  { id: 'shoes', title: 'Shoes', subtitle: 'Everyday comfort', action: 'Shop shoes', accent: '#10b981', soft: '#d1fae5', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { id: 'sales', title: 'Sales', subtitle: 'Up to 60% off', action: 'Explore deals', accent: '#f59e0b', soft: '#fef3c7', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
]

const featuredProducts = [
  { name: 'Aero Runner', category: 'men', price: '₹1,899', tag: 'New', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
  { name: 'City Flex', category: 'women', price: '₹1,499', tag: 'Popular', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Trail Pro', category: 'shoes', price: '₹2,799', tag: 'Top Rated', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { name: 'Luna Knit', category: 'sales', price: '₹899', tag: 'Trending', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
]

const offers = [
  { title: 'Flash Sale', text: 'Up to 50% off on selected styles', badge: 'Today only', color: '#f97316', featured: true },
  { title: 'Weekend Deal', text: 'Buy 2, get 1 free on essentials', badge: 'Ends Sunday', color: '#ec4899', featured: false },
  { title: 'Member Offer', text: 'Extra 10% off for PM members', badge: 'Members only', color: '#10b981', featured: false },
  { title: 'Free shipping', text: 'On orders above ₹2,000 across all categories', badge: 'Fast delivery', color: '#3b82f6', featured: false },
]

const saleBanner = {
  title: 'LIMITED TIME SALE',
  subtitle: 'New season drop. Save up to 60% on premium essentials.',
  button: 'Shop all deals',
}

export default function Home({ setPage, onAddToCart }) {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Fresh arrivals</p>
          <h1>Style your everyday with confidence.</h1>
          <p className="hero-text">
            Discover premium essentials, statement looks, and performance footwear designed for every moment.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setPage('sales')}>Shop now</button>
            <button className="secondary-btn" onClick={() => setPage('women')}>View lookbook</button>
          </div>

          <div className="stats-row">
            <div>
              <strong>25k+</strong>
              <span>happy shoppers</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>average rating</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>fast delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured product display">
          <div className="product-card large">
            <span className="pill">Premium drop</span>
            <h3>Velocity X</h3>
            <p>Street-ready sneakers</p>
            <div className="price-row">
              <strong>₹2,499</strong>
              <span>Free shipping</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sale-banner" aria-label="Main sale banner">
        <div className="sale-banner-copy">
          <p className="eyebrow">PM deals</p>
          <h2>{saleBanner.title}</h2>
          <p>{saleBanner.subtitle}</p>
          <button type="button" className="primary-btn sale-button" onClick={() => setPage('sales')}>{saleBanner.button}</button>
        </div>
        <div className="sale-progress-wrap" aria-label="offer progress">
          <div className="sale-progress-labels">
            <span>Offer progress</span>
            <strong>78% claimed</strong>
          </div>
          <div className="sale-progress-bar">
            <span></span>
          </div>
        </div>
      </section>

      <section className="offers-panel" aria-label="Current offers">
        {offers.map((offer) => (
          <article className={`offer-card ${offer.featured ? 'featured-offer' : ''}`} key={offer.title} style={{ '--offer-color': offer.color }}>
            <span className="offer-badge">{offer.badge}</span>
            <h3>{offer.title}</h3>
            <p>{offer.text}</p>
          </article>
        ))}
      </section>

      <section className="categories" aria-label="Shop by category">
        {categories.map((category) => (
          <article
            className="category-card"
            key={category.id}
            style={{
              '--card-accent': category.accent,
              '--card-soft': category.soft,
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.2), rgba(17,24,39,0.7)), url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => setPage(category.id)}
          >
            <span className="category-index">0{categories.indexOf(category) + 1}</span>
            <h3 className="category-title">{category.title}</h3>
            <p>{category.subtitle}</p>
            <button type="button">{category.action}</button>
          </article>
        ))}
      </section>

      <section className="featured" id="sales">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured picks</p>
            <h2>Best sellers this week</h2>
          </div>
          <button type="button" className="section-link" onClick={() => setPage('sales')}>See all products</button>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article className="product-item" key={product.name}>
              <div className="product-image" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span>{product.tag}</span>
              </div>
              <div className="product-info">
                <p>{product.category}</p>
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
    </>
  )
}
