import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export function Wasapp() {

  const [ pantalla, setPantalla ] = useState(window.innerWidth);
  
  useEffect( () => {

    function changeResize() {
      setPantalla(window.innerWidth);
    }

    window.addEventListener('resize', changeResize);

    return () => {
      removeEventListener('resize', changeResize);
    }

  }, []);

  const linkMovil = 'https://api.whatsapp.com/send?phone=+51%20945319118&text=¡Hola! Jeremy,\n eres muy gosu la firme =D'
  const linkWeb = 'https://web.whatsapp.com/send?phone=+51%20945319118&text=¡Hola! Jeremy,\n eres muy gosu la firme =D'


  return (
    <Link className="fixed w-14 bottom-6 right-6 z-20" target="_blank" to={`${pantalla<=500?linkMovil:linkWeb}`}>
      <img src="/whatsapp5.png" />
      {/* <img src="/whatsapp3.png" /> */}
      {/* <img src="/whatsapp2.png" /> */}
      {/* <img src="/whatsapp.png" /> */}
    </Link>
  )
}
