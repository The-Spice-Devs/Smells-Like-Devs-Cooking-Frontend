import '../styles/globals.css'
import Link from 'next/link';
import { AuthProvider, state } from '../contexts/auth';

function MyApp({ Component, pageProps }) {
  // console.log("PAGE PROPS.tokens: ", Component.tokens)
  return (
  <AuthProvider >
    <Component {...pageProps} state={state}/>
  </AuthProvider>
  )
}

export default MyApp
