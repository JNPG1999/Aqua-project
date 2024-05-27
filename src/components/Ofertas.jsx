import { datos } from '../data/dataEstatica'
import Card from './Card'
import Titulo from './Titulo'

const Ofertas = ({ title }) => {

  return (
    <div className='Ofertas mycontainer'>

      <Titulo titulo={ title }/>

      <div className="contenedor-Card">
          {
              datos.map((dato)=>
              {
                  return <Card key={dato.id} dato={dato}/>
              }
              )
          }
      </div>
    </div>
    
  )
}

export default Ofertas
