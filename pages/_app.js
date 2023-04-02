import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/animation.css'
import '../styles/editor.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import LayoutHomePage from '../components/Layouts/Layout'
import { useRouter } from 'next/router'
import {Logo} from '../images/index'
import { ConfigProvider } from 'antd';
const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

ConfigProvider.disableRuntimeThemeWarnings = true;

export default function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();  
  return (
    <main className={roboto.className}>
      <Head>
        <link rel="shortcut icon" href={Logo.src}/>
      </Head>
      {asPath === '/login' ?
        <Component {...pageProps} />
        :
        <LayoutHomePage>
          <Component {...pageProps} />
        </LayoutHomePage>
      }

    </main>
  )
}