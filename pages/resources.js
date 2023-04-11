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
        <title>MyWebClass.org | Resources</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><center>This is the Resources page</center></p>
        <h1><center>Our Team</center></h1>
        <h1><center>Academic Articles</center></h1>
        <h1><center>Downloadable Guides</center></h1>
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
