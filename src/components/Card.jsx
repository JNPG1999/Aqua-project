import { Link } from 'react-router-dom'
import { Button } from './Button';

const Card = ({dato,cantidad}) => {

  const {img,title,descripcion,id} = dato;

  return (
    
      <div className='Card'>
        <img src={img} alt="Imagen1" className='w-full flex-1 object-cover' />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-black uppercase'> {title} </div>
          <p className='text-gray-700 text-base'>
              {descripcion}
          </p>
        </div>
        <div className='px-6 pb-3'>
        <Link to={`/productos/${id}`}>
              <span className='flex justify-center'>
                {cantidad > 2 && 
                  <Button title={`${cantidad >= 2 && 'Ver Producto'}`} color={'text-white'} clases={'font-semibold mr-2 hover: hover:bg-blue-700 text-white max-sm:w-full'} 
                    background={'bg-blue-500'}
                  />}
              </span>
        </Link>
        </div>
      </div>
    
  )
}

export default Card
