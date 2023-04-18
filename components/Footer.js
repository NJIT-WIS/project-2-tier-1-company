import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {}
        <a
          href="https://www.facebook.com/"
          className={styles.socialIconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a
          href="https://www.twitter.com/"
          className={styles.socialIconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/"
          className={styles.socialIconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/instagram.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;