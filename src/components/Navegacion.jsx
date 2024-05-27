import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { BurgerButton } from './BurgerButton';

const Navegacion = () => {

  const [ clicked, setClicked ] = useState( false );

  const handleClick = () => {

    setClicked( !clicked );

  }

  return (

    <>
      <div className={ `Navegation lg:px-[50px] md:px-[25px] max-md:px-[25px] ${ clicked ? 'navegation2' : '' }` }>
        <div className='Logo'>
          <Link to='/'>
            <img src="/logo.png" alt="logo" width={ '270px' } height={ '60px' } />
          </Link>
        </div>

        <ul className={ `links ${ clicked ? 'activaBurguer' : '' }` }>
          <li>
            <NavLink onClick={ () => setClicked( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/" >Inicio</NavLink>
          </li>

          <li>
            <NavLink onClick={ () => setClicked( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/nosotros" >Nosotros</NavLink>
          </li>

          <li>
            <NavLink onClick={ () => setClicked( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/productos" >Productos</NavLink>
          </li>

          <li>
            <NavLink onClick={ () => setClicked( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/contactos">Contactos</NavLink>
          </li>
        </ul>

        <div className="Burger">
          <BurgerButton clicked={ clicked } handleClick={ handleClick } />
        </div>

      </div>
      <div className='mt-[80px]'>
        <Outlet />
      </div>
    </>
  )
}

export default Navegacion
