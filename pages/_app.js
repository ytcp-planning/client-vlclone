import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/animation.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import LayoutHomePage from '../components/Layouts/Layout'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Head>
        <link rel="shortcut icon" href="https://vlclone.com/public/logo_vlclone.png" />
      </Head>
      <LayoutHomePage>

      <Component {...pageProps} />
      </LayoutHomePage>
    </main>
  )
}