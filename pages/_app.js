import { Container } from '../components/styles/Container.styled'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (<Container><Component {...pageProps} /></Container>)
}

export default MyApp
