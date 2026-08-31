import { useState } from 'react'

export default function Cart({ cartItems, setPage, onUpdateQuantity, onRemoveItem }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => {
    const priceNumber = Number(String(item.price).replace(/[^\d]/g, ''))
    return sum + priceNumber * item.quantity
  }, 0)

  return (
    <section className="cart-page">
      <div className="feature-banner cart-banner">
        <div>
          <p className="eyebrow">Your bag</p>
          <h2>Shopping cart</h2>
        </div>
        <button type="button" className="primary-btn" onClick={() => setPage('home')}>
          Continue shopping
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-state cart-empty">
          <h3>Your cart is empty</h3>
          <p>Add a few essentials to get started.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image" aria-hidden="true" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button type="button" onClick={() => onUpdateQuantity(item.id, -1)} aria-label={`Decrease quantity of ${item.name}`}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => onUpdateQuantity(item.id, 1)} aria-label={`Increase quantity of ${item.name}`}>
                      +
                    </button>
                  </div>

                  <button type="button" className="remove-item-btn" onClick={() => onRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h3>Order summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
            </div>
            <button type="button" className="primary-btn checkout-button" onClick={() => setIsCheckoutOpen(true)}>
              Checkout
            </button>
          </aside>
        </div>
      )}

      {isCheckoutOpen && (
        <div className="checkout-modal-backdrop" onClick={() => setIsCheckoutOpen(false)}>
          <div className="checkout-modal" onClick={(event) => event.stopPropagation()}>
            <div className="checkout-header">
              <h3>Checkout</h3>
              <button type="button" className="close-modal-btn" onClick={() => setIsCheckoutOpen(false)} aria-label="Close checkout modal">
                ×
              </button>
            </div>

            <div className="checkout-row">
              <span>Items</span>
              <strong>{cartItems.reduce((total, item) => total + item.quantity, 0)}</strong>
            </div>
            <div className="checkout-row">
              <span>Total</span>
              <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
            </div>
            <button type="button" className="primary-btn checkout-submit" onClick={() => setIsCheckoutOpen(false)}>
              Confirm order
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
