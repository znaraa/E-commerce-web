import React from 'react';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b5998" style={{verticalAlign:'middle',marginRight:4}}><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#E4405F" style={{verticalAlign:'middle',marginRight:4}}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.608 1.385 2.557 2.436 2.351 3.548 2.293 4.829 2.235 6.109 2.223 6.518 2.223 12c0 5.482.012 5.891.07 7.171.058 1.281.264 2.393 1.315 3.444 1.051 1.051 2.163 1.257 3.444 1.315 1.28.058 1.689.07 7.171.07s5.891-.012 7.171-.07c1.281-.058 2.393-.264 3.444-1.315 1.051-1.051 1.257-2.163 1.315-3.444.058-1.28.07-1.689.07-7.171s-.012-5.891-.07-7.171c-.058-1.281-.264-2.393-1.315-3.444C21.393.334 20.281.128 19 .07 17.719.012 17.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2" style={{verticalAlign:'middle',marginRight:4}}><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-contact">
      <h3>Contact Us</h3>
      <div style={{marginBottom: '1rem'}}>
        <div>Email: <a href="mailto:support@digitalstore.mn">support@digitalstore.mn</a></div>
        <div>Phone: <a href="tel:+97699112233">+976 99 112233</a></div>
      </div>
      <form onSubmit={e => { e.preventDefault(); alert('Thank you for your message!'); }} style={{maxWidth: 350}}>
        <input type="text" placeholder="Your Name" required style={{width: '100%', marginBottom: 8, padding: 8}} />
        <input type="email" placeholder="Your Email" required style={{width: '100%', marginBottom: 8, padding: 8}} />
        <textarea placeholder="Your Message" required style={{width: '100%', marginBottom: 8, padding: 8}} rows={3} />
        <button type="submit" className="add-to-cart-btn" style={{width: '100%'}}>Send</button>
      </form>
      <div className="footer-social" style={{marginTop: 24}}>
        <span style={{fontWeight: 500}}>Follow us:</span>
        <a href="https://facebook.com/yourstore" target="_blank" rel="noopener noreferrer" style={{margin: '0 8px', color: '#3b5998', display:'inline-flex', alignItems:'center'}}><FacebookIcon />Facebook</a>
        <a href="https://instagram.com/yourstore" target="_blank" rel="noopener noreferrer" style={{margin: '0 8px', color: '#E4405F', display:'inline-flex', alignItems:'center'}}><InstagramIcon />Instagram</a>
        <a href="https://twitter.com/yourstore" target="_blank" rel="noopener noreferrer" style={{margin: '0 8px', color: '#1DA1F2', display:'inline-flex', alignItems:'center'}}><TwitterIcon />Twitter</a>
      </div>
    </div>
    <div className="footer-copy" style={{marginTop: '1rem', color: '#888', fontSize: '0.95rem'}}>
      &copy; {new Date().getFullYear()} Digital Store. All rights reserved.
    </div>
  </footer>
);

export default Footer;
