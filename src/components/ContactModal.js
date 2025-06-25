import React from 'react';

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: 400}}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Contact Us</h2>
        <p style={{margin: '1rem 0'}}>If you have any questions or feedback, please contact us:</p>
        <ul style={{marginBottom: '1rem'}}>
          <li>Email: <a href="mailto:support@digitalstore.mn">support@digitalstore.mn</a></li>
          <li>Phone: <a href="tel:+97699112233">+976 99 112233</a></li>
        </ul>
        <p>Or send us a message below:</p>
        <form onSubmit={e => { e.preventDefault(); alert('Thank you for your message!'); onClose(); }}>
          <input type="text" placeholder="Your Name" required style={{width: '100%', marginBottom: 8, padding: 8}} />
          <input type="email" placeholder="Your Email" required style={{width: '100%', marginBottom: 8, padding: 8}} />
          <textarea placeholder="Your Message" required style={{width: '100%', marginBottom: 8, padding: 8}} rows={3} />
          <button type="submit" className="add-to-cart-btn" style={{width: '100%'}}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
