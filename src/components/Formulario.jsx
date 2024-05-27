import { useState,useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Formulario.css';
import { toast } from 'react-toastify';


const datosEnvio = {

  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  mensaje: ''
};

export const Formulario = () => {

  const [ formState, setFormState ] = useState( datosEnvio );
  const form = useRef();
  
  const { nombre, apellido, email, telefono, mensaje } = formState;

  const [ error, setError ] = useState( '' );

  //? EMAILJS

  function sendEmail () {
    emailjs
      .sendForm('service_ne2dzfn', 'template_pat02m2', form.current, {
        publicKey: 'JbzcZsnLK3HoIT3E0',
      })
      .then(
        () => {
          toast.success('Correo enviado ctmr!')
          // alert('Correo enviado ctmr!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('El correo no se pudo enviar, verifique bien los datos')
        },
      );
  }
  //?

  function onSubmit( e ) {

    e.preventDefault();

    if ( Object.values( formState ).some( valor => valor === '' ) ) {

      setError( 'HAY UN INPUT VACIO Y SEXOOOOOOOOOOOOOOOOOOOOOOOO' );

      setTimeout( () => {

        setError( '' );

      }, 3000 )

      return;
    }

    /* VALIDANDO CORREO ELECTRONICO */

    if ( email ) {

      const validateEmail = ( correo ) => {
        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test( correo );
      }

      if ( !validateEmail( email ) ) {

        setError( 'CORREO ELECTRONICO NO VALIDO' );

        setTimeout( () => {

          setError( '' );

        }, 3000 )

        return;
      }
    }

    /* VALIDANDO EL INPUT TELEFONO */
    if ( !isNaN( parseInt( telefono ) ) && isFinite( telefono ) && (telefono.length >= 9) ) {
      sendEmail();
    } else if ( Number(telefono) < 0 ) {
      setError( 'Telefono no admite numeros negativos' );
      setTimeout( () => {
        setError( '' );
      }, 3000 )
      return;
    }

    else if ( isFinite(telefono) && telefono.length < 9 && telefono.length > 0 ) {
      setError( 'Telefono necesita tener al menos 9 caracteres o numeros' );
      setTimeout( () => {
        setError( '' );
      }, 3000 )

      return;
    } else {
      setError( 'TELEFONO NO VALIDO' );

      setTimeout( () => {

        setError( '' );

      }, 3000 )

      return;
    }

    // alert( 'SEXOOOOOOOOOOO ENVIADO' );

    setError( '' );

    /* RESETEA LOS INPUTS DEL FORMULARIO */
    setFormState( datosEnvio );

  }

  const onChangeInput = (  {target}  ) => {

    const { name, value } = target;

    setFormState( {
      ...formState,
      [ name ]: value
    } )

  }

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




  return (

    <section>
      <div className="container">
        <div className="info">
          <div className="content">
            <h2>Información de contacto</h2>

            <div className="info-text">
              <div className="item">
                <span className="fas fa-map-marker-alt"></span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloremque neque.</span>
              </div>

              <div className="item">
                <span className="fas fa-envelope"></span>
                <span>loremimpsum@gmail.com</span>
              </div>

              <div className="item">
                <span className="fas fa-phone"></span>
                <span>+00 123 456</span>
              </div>
            </div>
          </div>

          <div className="sociales">
            <a href=""><span className="fab fa-facebook-f"></span></a>
            <a href=""><span className="fab fa-twitter"></span></a>
            <a href=""><span className="fab fa-instagram"></span></a>
            <a href=""><span className="fab fa-youtube"></span></a>
            <a href=""><span className="fab fa-google"></span></a>
          </div>
        </div>

        <div className="form">
          { error && <div className='bg-red-500 text-white p-2 font-bold'> { error }  </div> }
          <h2>Comunicate con nosotros</h2>
          <form className="form-box" onSubmit={ onSubmit } ref={ form } noValidate>
            <div className={`input-box ${pantalla<=767 ? 'w100' : 'w50'}`}>
              <input type="text" onChange={ onChangeInput } name='nombre' value={ nombre } required/>
              <span>Nombre</span>
            </div>

            <div className={`input-box ${pantalla<=767 ? 'w100' : 'w50'}`}>
              <input type="text" onChange={ onChangeInput } name='apellido' value={ apellido } required/>
              <span>Apellido</span>
            </div>

            <div className={`input-box ${pantalla<=767 ? 'w100' : 'w50'}`}>
              <input type="text" onChange={ onChangeInput } name='email' value={ email } required/>
              <span>Email</span>
            </div>

            <div className={`input-box ${pantalla<=767 ? 'w100' : 'w50'}`}>
              <input type="text" onChange={ onChangeInput } name='telefono' value={ telefono } required/>
              <span>Telefono</span>
            </div>

            <div className="input-box w100 block">
              <textarea value={ mensaje } onChange={ onChangeInput } name='mensaje' required></textarea>
              <span>Escribe tu mensaje...</span>
            </div>

            <div className="input-box w100 btn">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
