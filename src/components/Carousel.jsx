
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export function Carousel( { carouselData, carouselObject,children } ) {
  return (
    <Swiper spaceBetween={ 30 }
      centeredSlides={ true }
      autoplay={ {
        delay: 2500,
        disableOnInteraction: false,
      } }
      pagination={ {
        clickable: true,
      } }
      navigation={ carouselData && true }
      modules={ [ Autoplay, Pagination, Navigation ] }
      className="mySwiper bg-transparent"
      loop={true}
    >
      {children}
    </Swiper>
  )
}

