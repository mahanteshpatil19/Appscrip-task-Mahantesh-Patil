export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="footer-newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h3 className="currency-title">CURRENCY</h3>
          <div className="currency">
            <span className="flag">🇺🇸</span>
            <span>USD</span>
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <hr />

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <div>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>◎</span>
            <span>in</span>
          </div>

          <h4 className="accepts">mettā muse ACCEPTS</h4>
          <div className="payments">
            <span>GPay</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Amex</span>
            <span>ApplePay</span>
            <span>OPay</span>
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
