import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/dataEstatica';
import { useEffect } from 'react';
import { Button } from './Button';

export const DetalleProducto = () => {

    const {id} = useParams();

    const productos = (id) =>{

        return products.find(producto => producto.id == id);
        
    }

    const { title, img, descripcion,contenido } = productos(id);
   
    useEffect(() => {
      
        productos(id);
    
    }, [id])
    

  return (
    <>
        <div className='detalle-producto'>
          <div className='img-producto'>
            <img src={img} alt={title}/>
          </div>
          <div className='info-producto'>
                <span className='uppercase'>{contenido}</span>
                <h1 className='font-bold'>{title}</h1>
                <div className='vendido-por' >
                  <p className='text-sm'>Vendido y despachado por:</p>
                  <div className='flex gap-2'>
                    <img src="../carrito.svg" alt="carrito" height={'20px'} width={'20px'}/>
                    <span className='text-sm'>Aqua Sur</span>
                  </div>
                </div>
                <div className='precios'>
                    <div className='flex flex-row justify-between'><p className='text-[#304165]'>Precio regular: </p> <span className='line-through text-[#7d8eb5]'>S/ 10.00</span></div>
                    <div className='flex flex-row justify-between'><p className='text-[#304165]'>Precio con descuento: </p> <span>S/ 5.00</span></div>
                </div>
                <div className='text-[#6678a1]'>
                    {descripcion}
                </div>

                <p className='font-semibold'>Métodos de pago:</p>
              <div className='metodo-pago'>
                  <div>
                    <img src="../yape.jpeg" alt="yape"/>
                  </div>
                  <div>
                    <img src="../plin.jpeg" alt="plin"/>
                  </div>
                  <div>
                    <img src="../bbva.jpg" alt="bbva"/>
                  </div>
              </div>             
              <p className='font-semibold'>Métodos de entrega disponibles:</p>
              <div className='flex flex-row justify-between max-sm:flex-col font-semibold'>
                <div className='flex flex-col'>
                  <div className='flex gap-2'>
                    <img src="../domicilio.svg" alt="" height={'20px'} width={'20px'}/><span>Despacho a domicilio</span>
                  </div>
                  <p className='pl-7 text-[#29d882]'>Disponible</p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex gap-2'>
                    <img src="../tienda.svg" alt="" height={'20px'} width={'20px'}/><span>Retiro en Tienda</span>
                  </div>
                  <p className='pl-7 text-[#29d882]'>Disponible</p>
                </div>
              </div>
              <div className='flex justify-center py-2'>
                <Button title='Agregar al carrito' color={'text-white'} background={'bg-blue-500'} text={'p-4'} clases={'hover: hover:bg-blue-700 text-white'}/>
              </div>
          </div>
        </div>
          
    </>
  )
}
