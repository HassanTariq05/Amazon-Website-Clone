import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';

function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div className='footer'>
      <div className="footer-row-1">
        <button onClick={handleScrollToTop} className="footer-row-1-button">Back to top</button>
      </div>

      <div className="footer-row-2">
        <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="footer-logo" />
        </Link>
        <p className="copyright-text">© 1996-2024, Amazon-Clone.com, Inc. or its affiliates</p>
      </div>
    
    </div>
  )
}

export default Footer
