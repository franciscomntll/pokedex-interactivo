import 'tailwindcss/tailwind.css'
import '@fontsource/poppins'
import DefaultLayout from '../layouts/DefaultLayout'

function MyApp({ Component, pageProps }) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    )
    
  }

  
  export default MyApp