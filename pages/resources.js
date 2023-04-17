import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { BsFiletypeDoc } from 'react-icons/bs'
import { BsFiletypePdf } from 'react-icons/bs'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>MyWebClass.org | Resources</title>
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
        <h1><center>Academic Articles</center></h1>
        <Link href={`resources`} legacyBehavior><a><h3><BsFiletypeDoc/> Article 1 - aiva avnabn 09a n0 an90a ean0an aej sgoj3</h3></a></Link>
        <Link href={`resources`} legacyBehavior><a><h3><BsFiletypeDoc/> Article 2 - jv n oni o oo uyb6 t7 0 09oii hg</h3></a></Link>
        <Link href={`resources`} legacyBehavior><a><h3><BsFiletypeDoc/> Article 3 - ign o eoiew ti0 w-0 adgj ieojf popoi iie9i0w i00ww 2jfjgoa jjjiii</h3></a></Link>
        <h1><center>Downloadable Guides</center></h1>
        <Link href={`resources`} legacyBehavior><a><h3><BsFiletypePdf/> Guide 1 - aiva avnabn 09a n0 an90a ean0an aej sgoj3</h3></a></Link>
        <Link href={`resources`} legacyBehavior><a><h3><BsFiletypePdf/> Guide 2 - jv n oni o oo uyb6 t7 0 09oii hg</h3></a></Link>
        <Link href={`resources`} legacyBehavior><a><h3><BsFiletypePdf/> Guide 3 - ign o eoiew ti0 w-0 adgj ieojf popoi iie9i0w i00ww 2jfjgoa jjjiii</h3></a></Link>
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
