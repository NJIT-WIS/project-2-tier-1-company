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
        <title>MyWebClass.org | About</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <center><p> This is the about page </p></center>
          <center><h1> Our Team </h1></center>
          <center><h1> Our Mission </h1></center>
          <center><h1> Our Partnerships </h1></center>
          <center><h1> Agile Overview </h1></center>
        </div>
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
