import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import '../public/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
