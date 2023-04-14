import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../styles/Blog.module.css'

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>MyWebClass.org | Blog</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}><center>We have a variety of blog posts to read below!</center></h2>
        <div className={styles.blogPage}>
          <div className={styles.blogColumn}>
            {allPostsData.slice(0, 3).map(({ id, date, title, image }) => (
              <div className={styles.blogPost} key={id}>
                <Link href={`/posts/${id}`} legacyBehavior>
                  <a className={styles.blogPostLink}>
                    <img src={image} alt="Blog Post Image" className={styles.blogPostImage} />
                    <h3 className={styles.blogPostTitle}>{title}</h3>
                  </a>
                </Link>
                <div className={styles.blogPostDateContainer}>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.blogColumn}>
            {allPostsData.slice(3, 6).map(({ id, date, title, image }) => (
              <div className={styles.blogPost} key={id}>
                <Link href={`/posts/${id}`} legacyBehavior>
                  <a className={styles.blogPostLink}>
                    <img src={image} alt="Blog Post Image" className={styles.blogPostImage} />
                    <h3 className={styles.blogPostTitle}>{title}</h3>
                  </a>
                </Link>
                <div className={styles.blogPostDateContainer}>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.blogColumn}>
            {allPostsData.slice(6, 9).map(({ id, date, title, image }) => (
              <div className={styles.blogPost} key={id}>
                <Link href={`/posts/${id}`} legacyBehavior>
                  <a className={styles.blogPostLink}>
                    <img src={image} alt="Blog Post Image" className={styles.blogPostImage} />
                    <h3 className={styles.blogPostTitle}>{title}</h3>
                  </a>
                </Link>
                <div className={styles.blogPostDateContainer}>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
