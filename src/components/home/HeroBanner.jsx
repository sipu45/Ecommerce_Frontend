import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

import {bannerList} from '../../utils/index.js';

// Import Swiper styles
import 'swiper/css';

const HeroBanner = () => {
  return (
   <div className='py-2 round-md '>
        <Swiper
            grabcursor={true}
            autoplay ={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
        >
            {bannerList.map((item, i) => (
                <SwiperSlide key={i}>
                    <div className={`carousel-item rounded-md sm:h-[500px] h-96`}>
                        <h3 className='text-xl font-bold text-gray-800'>{item.title}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
   </div>
  );
};

export default HeroBanner;