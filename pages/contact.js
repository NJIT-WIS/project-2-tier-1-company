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
        <form onSubmit ={handleSubmit}>
            <input name="name" type="text" class="feedback-input" placeholder="Name" onChange={handleInputChange} />
            <input name="email" type="text" class="feedback-input" placeholder="Email" onChange={handleInputChange} />
            <textarea name="text" class="feedback-input" placeholder="Comment" onChange={handleInputChange}></textarea>
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

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const comment = form.text.value;
  if (!name || !email || !comment) {
    alert("Please fill in all fields.");
    return;
  }
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  //Post validation, possibly integrate mailchimp here or alternative appraoch
  //Considering adding thank you pop up
};

const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

const handleInputChange = (event) => {
//Could add validation here too
}
