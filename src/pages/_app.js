import 'antd/dist/antd.css'

import GlobalStyle from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
