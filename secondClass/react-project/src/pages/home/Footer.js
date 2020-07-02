import React from 'react';
import { Copyright } from '../../common/components/Copyright';
import './styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <h2>Our community</h2>
      <nav aria-label="navigation-travel">
        <ul>
          <li className="footer__travelling"><span>travelling</span></li>
          <li className="footer__hosting"><span>hosting</span></li>
          <li className="footer__tellstory"><span>tell your story</span></li>
        </ul>
      </nav>
      <Copyright />
    </footer>
  );
}

export { Footer };