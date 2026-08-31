import { useState } from 'react'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Shoes from './Shoes'
import Sales from './Sales'
import About from './About'
import Cart from './Cart'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'sales', label: 'Sales' },
  { id: 'about', label: 'About' },
]

const starterCart = [
  { id: 'starter-1', name: 'Urban Tee', price: '₹1,299', quantity: 1 },
  { id: 'starter-2', name: 'City Walk', price: '₹1,699', quantity: 1 },
]

export default function App() {
  const [page, setPage] = useState('home')
  const [cartItems, setCartItems] = useState(starterCart)

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.name === product.name)

      if (existingItem) {
        return currentItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { id: product.name, name: product.name, price: product.price, quantity: 1 }]
    })

    setPage('cart')
  }

  const updateCartQuantity = (itemId, change) => {
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== itemId) return [item]

        const nextQuantity = item.quantity + change
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : []
      }),
    )
  }

  const removeCartItem = (itemId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId))
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img
            className="brand-logo"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
            alt="PM storefront logo"
          />
          <span className="brand-name">PM SHOP</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${page === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button type="button" className="nav-button" onClick={() => setPage('cart')}>
          Cart ({cartCount})
        </button>
      </header>

      <main>
        {page === 'home' && <Home setPage={setPage} onAddToCart={handleAddToCart} />}
        {page === 'men' && <Men setPage={setPage} onAddToCart={handleAddToCart} />}
        {page === 'women' && <Women setPage={setPage} onAddToCart={handleAddToCart} />}
        {page === 'shoes' && <Shoes setPage={setPage} onAddToCart={handleAddToCart} />}
        {page === 'sales' && <Sales setPage={setPage} onAddToCart={handleAddToCart} />}
        {page === 'about' && <About />}
        {page === 'cart' && (
          <Cart
            cartItems={cartItems}
            setPage={setPage}
            onUpdateQuantity={updateCartQuantity}
            onRemoveItem={removeCartItem}
          />
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img
            className="brand-logo"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
            alt="PM storefront logo"
          />
          <span>PM SHOP</span>
        </div>
        <p>© 2026 PM Store. All rights reserved.</p>
        <div className="footer-links">
          <span>Shipping</span>
          <span>Returns</span>
          <span>Support</span>
        </div>
      </footer>
    </div>
  )
}
