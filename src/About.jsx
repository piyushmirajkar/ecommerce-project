const benefits = [
  'Free shipping over ₹1,500',
  'Easy 30-day returns',
  'Secure checkout',
  'Curated premium styles',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-copy">
        <p className="eyebrow">Why PM</p>
        <h2>Designed for movement, made for everyday life.</h2>
        <p>
          We blend comfort, performance, and modern design to help you move through the day in style.
          From workwear to weekend essentials, every piece is chosen for quality and versatility.
        </p>
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div className="about-panel">
        <div className="mini-card">
          <span>Trending</span>
          <strong>New capsule collection</strong>
        </div>
      </div>
    </section>
  )
}
