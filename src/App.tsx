import { useState, type FormEvent } from 'react'
import './App.css'

const amounts = [15, 30, 60, 120]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="none">
      <path d="M32 8C17 8 9 12 8 23c-.7 7 5 11 11 8 8-4 11-14 13-23Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M7 34c5-9 11-13 20-18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [donationAmount, setDonationAmount] = useState(30)
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly')
  const [donationOpen, setDonationOpen] = useState(false)
  const [donationSent, setDonationSent] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  function handleDonation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setDonationSent(true)
  }

  function closeDonation() {
    setDonationOpen(false)
    setDonationSent(false)
  }

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        Good food grows good things. <a href="#impact">See what we're growing <ArrowIcon /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Root and Rise home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><LeafIcon /></span>
          <span>root<span className="brand-amp">&</span>rise<span className="brand-period">.</span><small>COMMUNITY FOOD PROJECT</small></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#mission" onClick={() => setMenuOpen(false)}>Our mission</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>Our people</a>
          <button className="nav-donate" onClick={() => { setDonationOpen(true); setMenuOpen(false) }}>Give a little good <ArrowIcon /></button>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span /> A little more good, every day</div>
          <h1>Good food.<br /><span>Rooted in</span><br /><span>community.</span></h1>
          <p>We’re turning empty lots into neighborhood gardens—and making fresh, nourishing food something everyone can reach.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => setDonationOpen(true)}>Be part of the good <ArrowIcon /></button>
            <a className="text-link" href="#mission">Get to know us <span>↓</span></a>
          </div>
          <div className="hero-note"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span></div><span><strong>Neighbors grow here.</strong><br />Come as you are.</span></div>
        </div>
        <div className="hero-visual" role="img" aria-label="A neighbor tending fresh greens in a community garden">
          <div className="hero-image" />
          <div className="image-label"><span className="label-icon"><LeafIcon /></span><span>Grown together,<br /><strong>right here at home.</strong></span></div>
          <div className="hero-stamp"><span>GOOD</span><LeafIcon /><span>GROWS HERE</span></div>
          <div className="hero-photo-credit">A Saturday morning at Orchard Street Garden</div>
        </div>
        <div className="hero-side-note">GOOD THINGS TAKE ROOT &nbsp;·&nbsp; SINCE 2018 &nbsp;·&nbsp; GOOD THINGS TAKE ROOT &nbsp;·&nbsp;</div>
      </section>

      <section className="impact-strip" id="impact" aria-label="Our impact">
        <div className="impact-intro"><span className="eyebrow">A little adds up</span><p>Good things are<br />already growing.</p></div>
        <div className="impact-stat"><strong>12<span>k</span></strong><span>neighbors reached<br />with fresh food</span></div>
        <div className="impact-stat"><strong>08</strong><span>community gardens<br />growing strong</span></div>
        <div className="impact-stat"><strong>3.4<span>k</span></strong><span>volunteer hours<br />shared with love</span></div>
        <div className="impact-flower" aria-hidden="true">✳</div>
      </section>

      <section className="mission-section" id="mission">
        <div className="mission-image-wrap">
          <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85" alt="Fresh vegetables picked from a community garden" />
          <span className="image-caption">Picked this morning. Shared this afternoon.</span>
        </div>
        <div className="mission-copy">
          <div className="eyebrow"><span /> Why we show up</div>
          <h2>Food is more than<br />what’s <em>on the table.</em></h2>
          <p className="mission-lede">It’s a neighbor checking in. Kids getting their hands in the soil. A bag of tomatoes that tastes like summer.</p>
          <p>We believe every neighborhood deserves good food close to home. So we bring people together to grow it, share it, and make sure no one gets left out.</p>
          <a className="text-link" href="#work">A little more about us <ArrowIcon /></a>
          <div className="mission-doodle" aria-hidden="true">growing<br />together <span>↗</span></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div><div className="eyebrow"><span /> The good we're growing</div><h2>Small seeds.<br /><em>Big-hearted</em> change.</h2></div>
          <p>It takes a whole neighborhood to grow a little good. Here are a few ways we get our hands dirty.</p>
        </div>
        <div className="work-grid">
          <article className="work-card work-card-green">
            <span className="card-number">01 / GROW</span>
            <div className="work-card-icon">✳</div>
            <h3>Make room<br />for a garden.</h3>
            <p>We turn overlooked spaces into places where food—and friendships—can grow.</p>
            <a href="#volunteer" aria-label="Learn more about community gardens">Get your hands dirty <ArrowIcon /></a>
            <div className="card-decoration garden-decoration" aria-hidden="true">❋</div>
          </article>
          <article className="work-card work-card-peach">
            <span className="card-number">02 / SHARE</span>
            <div className="work-card-icon">♡</div>
            <h3>Pass the good<br />things around.</h3>
            <p>Fresh, local food goes from our gardens to our neighbors’ tables. No strings attached.</p>
            <a href="#donate" onClick={() => setDonationOpen(true)}>Share what you can <ArrowIcon /></a>
            <div className="card-decoration share-decoration" aria-hidden="true">♡</div>
          </article>
          <article className="work-card work-card-lilac">
            <span className="card-number">03 / BELONG</span>
            <div className="work-card-icon">↗</div>
            <h3>Find your<br />kind of people.</h3>
            <p>Pull up a chair, pick up a trowel, or just come say hi. There’s a place for you.</p>
            <a href="#volunteer">Come hang out <ArrowIcon /></a>
            <div className="card-decoration belong-decoration" aria-hidden="true">✿</div>
          </article>
        </div>
      </section>

      <section className="quote-section" id="stories">
        <div className="quote-image"><img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=85" alt="A volunteer sharing a harvest with their community" /><span>REAL PEOPLE. REAL GOOD.</span></div>
        <div className="quote-copy"><span className="quote-mark">“</span><blockquote>I came for the tomatoes. I stayed because somebody remembered my name.</blockquote><p>MARIA G. <span>·</span> GARDEN NEIGHBOR SINCE 2021</p><div className="quote-controls"><span className="quote-dots"><i /><i /><i /></span><span>01 <span>/</span> 03</span></div></div>
      </section>

      <section className="volunteer-section" id="volunteer">
        <div className="volunteer-copy">
          <div className="eyebrow"><span /> There's a place for you</div>
          <h2>Come as you are.<br /><em>Leave a little</em><br />more connected.</h2>
          <p>No green thumb required. Just a little curiosity and maybe clothes you don’t mind getting dirty.</p>
          <a href="mailto:hello@rootandrise.org?subject=I%27d%20love%20to%20volunteer" className="button button-light">Find your way in <ArrowIcon /></a>
        </div>
        <div className="volunteer-image"><img src="https://images.unsplash.com/photo-1592982537447-6f2a6a0d8d7a?auto=format&fit=crop&w=1100&q=85" alt="Friends working side by side in the garden" /><span className="volunteer-image-note">No experience needed.<br /><strong>Good company included.</strong></span></div>
      </section>

      <section className="donation-section" id="donate">
        <div className="donation-heading"><div className="eyebrow"><span /> Your good goes a long way</div><h2>A little good,<br /><em>goes a long way.</em></h2><p>Every seed, every hour, every dollar helps our neighbors grow. Pick what feels right.</p></div>
        <div className="donation-box">
          <div className="frequency-switch" role="group" aria-label="Donation frequency">
            <button className={frequency === 'once' ? 'active' : ''} onClick={() => setFrequency('once')}>One time</button>
            <button className={frequency === 'monthly' ? 'active' : ''} onClick={() => setFrequency('monthly')}>Monthly <span>♥</span></button>
          </div>
          <div className="amount-options" role="group" aria-label="Choose a donation amount">
            {amounts.map((amount) => <button key={amount} className={donationAmount === amount ? 'active' : ''} onClick={() => setDonationAmount(amount)}>${amount}</button>)}
          </div>
          <div className="donation-impact"><span className="impact-leaf"><LeafIcon /></span><span><strong>${donationAmount}{frequency === 'monthly' ? '/mo' : ''}</strong> {donationAmount < 30 ? 'helps fill a neighbor’s produce bag.' : donationAmount < 60 ? 'brings fresh food to a family table.' : donationAmount < 120 ? 'keeps a community garden growing.' : 'grows good food all season long.'}</span></div>
          <button className="button button-dark donation-button" onClick={() => setDonationOpen(true)}>Make it grow <ArrowIcon /></button>
          <p className="donation-reassurance">A good heart is all you need. <span>♡</span></p>
        </div>
      </section>

      <section className="newsletter-section">
        <div><span className="eyebrow">A note from the garden</span><h2>A little good in<br />your inbox.</h2><p>Stories, garden days, and the occasional really good tomato.</p></div>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <label htmlFor="newsletter-email">YOUR EMAIL, PLEASE</label>
          <div className="email-field"><input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required disabled={subscribed} /><button type="submit" aria-label="Subscribe to newsletter" disabled={subscribed}>{subscribed ? '✓' : <ArrowIcon />}</button></div>
          <p aria-live="polite">{subscribed ? 'You’re on the list. Keep an eye on your inbox!' : 'Only good things. Unsubscribe whenever.'}</p>
        </form>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><LeafIcon /></span><span>root<span className="brand-amp">&</span>rise<span className="brand-period">.</span><small>COMMUNITY FOOD PROJECT</small></span></a>
        <p>Growing good, together.<br /><span>© 2025 Root & Rise Community Food Project</span></p>
        <div className="footer-links"><a href="#mission">Our story</a><a href="#volunteer">Say hello</a><a href="#donate">Give a little good</a></div>
        <a className="back-to-top" href="#home" aria-label="Back to top">↑</a>
      </footer>

      {donationOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeDonation() }}>
          <section className="donation-modal" role="dialog" aria-modal="true" aria-labelledby="donation-modal-title">
            <button className="modal-close" onClick={closeDonation} aria-label="Close donation dialog">×</button>
            {donationSent ? <div className="donation-success"><span>✳</span><h2 id="donation-modal-title">You just planted<br />a little good.</h2><p>Thanks for showing up for your neighbors. This demo doesn’t process payments, but your generosity would mean a lot.</p><button className="button button-dark" onClick={closeDonation}>Back to growing <ArrowIcon /></button></div> : <><div className="eyebrow"><span /> A little good goes a long way</div><h2 id="donation-modal-title">Let's grow<br /><em>something good.</em></h2><p>Your <strong>${donationAmount}{frequency === 'monthly' ? ' monthly' : ''}</strong> gift helps bring fresh food and neighbors together.</p><form onSubmit={handleDonation}><label htmlFor="donor-name">YOUR NAME</label><input id="donor-name" name="name" placeholder="First and last name" autoComplete="name" required /><label htmlFor="donor-email">EMAIL ADDRESS</label><input id="donor-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /><button type="submit" className="button button-dark">Continue with ${donationAmount} <ArrowIcon /></button></form><span className="modal-note">This is a demo form—no payment will be taken.</span></>}
          </section>
        </div>
      )}
    </main>
  )
}

export default App
