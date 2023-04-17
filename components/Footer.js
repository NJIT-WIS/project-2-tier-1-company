import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/" target="_blank">
          <Image
            src="/images/facebook.png"
            alt="Facebook"
            width={25}
            height={25}
          />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <Image
            src="/images/twitter.png"
            alt="Twitter"
            width={25}
            height={25}
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <Image
            src="/images/instagram.png"
            alt="Instagram"
            width={25}
            height={25}
          />
        </a>
      </div>
      <div className={styles.newsletter}>
        <form action="#" method="post">
          <label htmlFor="email">Subscribe to our Newsletter</label>
          <br />
          <input type="email" name="email" id="email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}
