import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import banner from './/img/computer.jpg'
import hero from './/img/computerlab.jpg'
import ReactGA from 'react-ga';


export default function Home({ allPostsData }) {
ReactGA.initialize('G-5LYMBP1L2Y');

  return (
      <Layout home>

      <Head>
        <title>{siteTitle}</title>
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
      <Image src={hero} width={950} height={700}/>
      <Image src={banner} width={400} height={300} className="rightimg"/>
      <section className={utilStyles.headingMd}>
        <h1>Introducing mywebclass.org!</h1>
        <p>
          A new learning resource for educators in our AI driven world.
        </p>
      </section>
    <section className={utilStyles.headingMd}>
      <h3>Section 2</h3>
      <p>Paragraph 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <section className={utilStyles.headingMd}>
      <h3>Section 3</h3>
      <p>Paragraph 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
