import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Head>
          <title>runeb.io</title>
        </Head>

        <Header></Header>

        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <Footer/>
    </div>
  );
}
