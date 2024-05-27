import { useEffect, useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {clientes} from '../data/dataEstatica';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CarouselClientes= () => {


  const [pantalla,setPantalla] = useState(window.innerWidth);
  // console.log('PANTALLA INICIAL:', pantalla);

  useEffect(() => {
    const handleResize = () => {
      setPantalla(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

  return (
    <div className='max-w-screen-xl mx-auto mb-9'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={pantalla <= 640 ? 1 : 3 }
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        autoplay={{delay:2000,disableOnInteraction:false}}
        navigation={false}
        loop={true}
      >
        {clientes.map(({img}, index) => (
          <SwiperSlide key={img} virtualIndex={index} style={{height:'200px'}}>
            <img src={img} alt="tuMama"/>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  )
}

export default CarouselClientes
