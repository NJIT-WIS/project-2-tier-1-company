import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>MyWebClass.org | Contact Us</title>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=G-5LYMBP1L2Y`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5LYMBP1L2Y');
          `}
        </script>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1><center>Contact us below!</center></h1>
        <form>
            <input name="name" type="text" class="feedback-input" placeholder="Name" />
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
      </section>

    </Layout>
  );

}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
