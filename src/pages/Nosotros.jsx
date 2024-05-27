import { Banner } from "../components/Banner"
import { CardImgNosotros } from "../components/CardImgNosotros"
import Footer from "../components/Footer"
import Locales from "../components/Locales"
import S_Contactos from "../components/S_Contactos"
import { S_Nosotros } from "../components/S_Nosotros"
import Titulo from "../components/Titulo"
import { imgNosotros, testimoniosClientes } from "../data/dataEstatica"
import CarouselClientes from "../components/CarouselClientes"
import { ContainerTestimoniales } from "../components/ContainerTestimoniales"

export function Nosotros() {
  return (
    <div className="overflow-hidden">
      <Banner title={ '| Quienes Somos' } />

      {/**SECTION NOSOTROS */ }

      <S_Nosotros />

      {/**SECTION Nuestra Empresa(imagenes) */ }
      <Titulo titulo={ 'Nuestra Empresa' } />

      <div className="flex flex-wrap mycontainer justify-center items-center gap-8">
        {
          imgNosotros.map( data => (
            <CardImgNosotros key={ data.id } { ...data } />
          ) )
        }

      </div>

      {/**SECTION Testimonio */ }
      <Titulo titulo={ 'Ellos confian en nosotros' } />
      
        {/*COLOCAR EN UN MAP Y GUARDAR LOS DATOS EN UN OBJETO*/}

        <ContainerTestimoniales data={ testimoniosClientes } />

      {/**SECTION Carousel de nuestros clientes */ }
      <Titulo titulo={ 'Nuestros Clientes' } />

      <CarouselClientes/>

      {/**?SECCTION DE CONTACTOS */ }

      <S_Contactos />
      
      {/**?SECCTION DE MAPA(ubicacion) */ }

      <Locales height={ 600 } width={ 1000 } />

      <Footer />

    </div>
  )
}
