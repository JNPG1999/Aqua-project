import { Banner } from "../components/Banner";
import { useLocation } from "react-router-dom"
import { IProductos } from "../components/IProductos";
import { datos, products } from "../data/dataEstatica"
import Footer from "../components/Footer";
import Locales from "../components/Locales";

export function Productos() {

  // const cantidadProductos = useLocation();
  // console.log(cantidadProductos.pathname);

  return (
    <>

      <Banner title={'| Productos'}/>
      <IProductos data={products} cantidad={products.length} />
      <Locales height={600} width={1000}/>
      <Footer/>
    </>
  )
}
