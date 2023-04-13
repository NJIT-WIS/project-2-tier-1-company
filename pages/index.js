import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import banner from './/img/computer.jpg'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Image src={banner} width={400} height={300} id="banner"/>
      <section className={utilStyles.headingMd}>
        <p><h1>Introducing mywebclass.org!</h1> </p>
        <p>
          A new learning resourec for educators in our AI driven world.
        </p>
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
