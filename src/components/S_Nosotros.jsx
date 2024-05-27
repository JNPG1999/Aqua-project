import Titulo from "./Titulo";



export function S_Nosotros() {
  return (
    <div className="mycontainer">
      <div className=" w-[70%] m-auto">
        <Titulo titulo={ 'Nosotros' } />
        <p className="text-center w-[60%] m-auto">Somos distribuidores exclusivos de diferentes marcas como son: AGUA SAN MATEO – AGUA JALSURI - AGUA SAN LUIS. Contamos con más de 20 años de experiencia en el mercado nacional.</p>
        <div className="flex flex-row justify-center items-center gap-12 max-lg:flex-col ">
          <div className="flex-col">
            <div className="mb-4">
              <h3 className="font-bold text-3xl mb-4">Vision</h3>
              <p>Llegar al público en general , brindandole un producto de calidad, como manifiesta nuestros certificados ISO. Y lo más importante direccionarnos, hacia la excelencia en la calidad de servicio.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-3xl mb-4">Mision</h3>
              <p>Nuestro objetivo es mantenernos siempre en el primer lugar en distribución de bidones y demás valores agregados en sus diferentes formatos. Y sobre todo crear clientes, en la cual nuestro desafío es fidelizarlo y lograr su lealtad. </p>
            </div>
          </div>
          <div className="w-full">
            <img src="bolo.png" className="w-full h-80 object-cover max-lg:object-right" />
          </div>
        </div>
      </div>
    </div>
  )
}
