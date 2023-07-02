import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/SCE_Logo_RGB.png';
import AVTR2 from '../../assets/eit-urban-mobility.png';
import AVTR3 from '../../assets/HM_Logo_RGB.png';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

const data = [
  {
    avatar: AVTR1,
    name: 'SCE',
    review: `Strascheg Center for Entrepreneurship, is a renowned startup incubator that plays a pivotal role
    in fostering innovation and supporting entrepreneurs. With a strong focus on nurturing
    entrepreneurial mindsets and providing valuable resources, SCE has become a hub for aspiring
    startups to grow and thrive. By offering a dynamic ecosystem, comprehensive mentoring programs,
    and access to a vast network of industry experts, SCE empowers entrepreneurs to transform their
    innovative ideas into successful ventures. Their commitment to driving sustainable growth and
    fostering collaboration makes SCE an invaluable partner for Energywise`,
  },
  {
    avatar: AVTR2,
    name: 'EIT Mobility',
    review: `EIT Urban Mobility, is an initiative led by the European Institute of Innovation and Technology
    (EIT) aimed at revolutionizing urban mobility solutions. As a trusted partner of Energywise, EIT
    Mobility brings together a diverse community of industry leaders, researchers, and entrepreneurs
    working towards creating smarter, more sustainable mobility systems. By fostering innovation and
    collaboration, EIT Mobility plays a key role in shaping the future of urban mobility. Through their
    extensive knowledge, expertise, and support, they empower Energywise to develop cutting-edge
    energy solutions that align with the evolving needs of modern cities.`,
  },
  {
    avatar: AVTR3,
    name: 'HM',
    review: `Hochschule München university a prestigious educational institution known for its excellence in
    research and education. With a strong focus on energy-related studies and sustainable technologies,
    HM plays a vital role in shaping the future workforce in the energy sector. Through their cutting-edge
    research, interdisciplinary programs, and close collaboration with industry partners, HM equips
    students with the skills and knowledge needed to tackle the complex challenges of the energy
    industry. As a trusted partner of Energywise, HM provides valuable insights and expertise, helping to
    drive innovation and foster sustainable energy practices.`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* <h5>Review from clients</h5> */}
      <h2>Our Partners</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Client Avatar" />
              </div>
              <h4 className="client__name">{name}</h4>
              <p className="client__review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
