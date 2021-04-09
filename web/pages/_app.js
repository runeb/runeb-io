import Head from "next/head"
import Header from "../components/Header"
import "../style.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>runeb.io</title>
    </Head>

    <Header></Header>
    <main>
    <Component {...pageProps} />
    </main>
    <footer>Wohoo!</footer>
    </>
  )
}