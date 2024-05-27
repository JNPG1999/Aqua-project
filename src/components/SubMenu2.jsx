import { Link } from "react-router-dom";



export function SubMenu2({...props}) {
  return (
    <div className="flex flex-col dropDown" {...props}>
      <ul className="flex flex-col gap-4">
        <li>
          <Link to={'contactos'}>Bidones y Cajas de Agua</Link>
        </li>
        <li>
          <Link>Surtidores</Link>
        </li>
        <li>
          <Link>Equipo Completo</Link>
        </li>
        <li>
          <Link>Dispensadores Electricos</Link>
        </li>
        <li>
          <Link>Bebidas</Link>
        </li>
      </ul>
    </div>
  )
}
