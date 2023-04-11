import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
//Uncomment after nav bar js file created
/*
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
*/