import { useLocation } from "react-router-dom"
import Card from "./Card"

export function IProductos({ data,cantidad }) {

  const cantidadProductos = useLocation().pathname;
  console.log(cantidadProductos)

  return (
    <div className="contenedor-Card mycontainer mt-5">
        {
          data.map( ( dato,index ) => (
            index <= cantidad && <Card key={ dato.id } dato={ dato } cantidad={cantidad} />
        )
          )
        }
      </div>
  )
  


}
