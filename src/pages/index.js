import Head from 'next/head'
import Header from '../components/Header'
import Home from './Home'

export default function Main() {
  return (
    <div>
      <Head>
        <title>Mercado Cripto</title>
        <meta name="description" content="Suas compras com Criptomoedas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Home />
    </div>
  )
}
