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
          <h3><center> And lastly...YOU!</center></h3>
            <p><center> At our core, we believe that education is a powerful tool for creating positive change in the 
             world. And we know that we can't do it alone. That's why we rely on the support of passionate volunteers like 
             you to help us achieve our mission. By volunteering with us, you'll have the opportunity to make a meaningful
             impact on the lives of learners around the globe. Whether you're interested in sharing your knowledge as an 
             instructor, providing support as a mentor, or contributing your skills in other ways, we have a variety of 
             opportunities available to match your interests and expertise.</center></p>
             <br>
            <p><center> As a volunteer, you'll join a community of like-minded individuals who are committed to making a 
            difference through education. You'll gain valuable experience, build new skills, and make connections that can 
            last a lifetime. So if you're looking for a way to give back and make a positive impact in the world, we invite 
            you to join us on our mission. Together, we can empower learners everywhere and transform the future of education.</center></p>
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
