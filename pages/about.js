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
        <p>This is the about page</p>
        <h1><center>Our Team</center></h1>
        <h1><center>Our Mission</center></h1>
          <p><center>Our mission is to empower individuals with the knowledge and skills
              they need to achieve their dreams and succeed in today's rapidly changing world.
              We believe that everyone deserves access to quality education, regardless of their background or
              circumstances. That's why we've created an innovative online platform, designed to provide engaging and
              interactive learning experiences that are accessible to anyone, anywhere. At our core, we are educators
              and innovators, committed to transforming the way people learn and grow. We are passionate about
              empowering our students to reach their full potential and make a positive impact in their communities
              and beyond. With our cutting-edge technology and expert instructors, we offer a dynamic and personalized
              learning experience that helps our students thrive. Whether you're looking to advance your career, pursue
              your passions, or simply learn something new, our platform provides the tools and resources you need to
              succeed. Join us on our mission to empower learners everywhere and unlock the limitless potential of
              education.</center></p>
        <h1><center>Our Partnerships</center></h1>
        <h1><center>Agile Overview</center></h1>
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
