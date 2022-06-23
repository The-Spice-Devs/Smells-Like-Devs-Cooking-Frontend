import '../styles/globals.css'

import { AuthProvider } from '../contexts/auth';


function MyApp({ Component, pageProps }) {

  return (
    <>   
      <AuthProvider>
          <Component {...pageProps} />
      </AuthProvider>
          <footer className="w-full bg-amber-700 text-orange-50">
            <p >&copy;2022</p>
            <a href="https://github.com/The-Spice-Devs">The Spice Devs GitHub</a>
          </footer>
        </>
    )
}

export default MyApp
