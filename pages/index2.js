import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import VideoPopup from "@layouts/components/VideoPopup";
import { getListPage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home({ allPostsData }) {
  ReactGA.initialize('G-5LYMBP1L2Y');

  const [showPrivacyModal, setShowPrivacyModal] = React.useState(true);

  const handleCloseModal = () => {
    setShowPrivacyModal(false);
  };

  React.useEffect(() => {
    if (!showPrivacyModal) {
      ReactGA.initialize('G-5LYMBP1L2Y');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [showPrivacyModal]);

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

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className={styles.privacyModal}>
          <div className={styles.privacyContent}>
            <h2>Privacy Policy</h2>
            <p>
              This website uses Google Analytics to help analyze how users use the site. The tool uses "cookies," which are text files placed on your computer, to collect standard Internet log information and visitor behavior information in an anonymous form.
            </p>
            <p>
              To learn more about how your information is tracked, please refer to our <a href="#">Privacy Policy</a>.
            </p>
            <p>
              By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.
            </p>
            <button onClick={handleCloseModal}>I understand</button>
          </div>
        </div>
      )}

      <Image src={hero} width={950} height={700} />
      <Image src={banner} width={400} height={300} className="rightimg" />
      <section className={utilStyles.headingMd}>
        <h1>Introducing mywebclass.org!</h1>
        <p>A new learning resource for educators in our AI driven world.</p>
      </section>
      <section className={utilStyles.headingMd}>
        <h3>Section 2</h3>
        <p>Paragraph 2 Lm.</p>
      </section>
      <section className={utilStyles.headingMd}>
        <h3>Section 3</h3>
        <p>Paragraph 3 L</p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
