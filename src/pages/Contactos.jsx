import { Banner } from "../components/Banner"
import Footer from "../components/Footer"
import { Formulario } from "../components/Formulario"
import Locales from "../components/Locales"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Contactos() {
  return (
    <>

      <Banner title={'| Contactanos'} />
      <Formulario />
      <Locales height={600} width={1000} />
      <Footer />
      <ToastContainer 
        style={{ zIndex: 10000000 }}
        pauseOnHover={ false }
        pauseOnFocusLoss={ false }
      />

    </>
  )
}
