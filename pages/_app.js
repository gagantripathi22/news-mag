import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-screen">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
