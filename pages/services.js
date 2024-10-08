import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Layout from '../components/Layout'
import data from '../utils/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import "swiper/css";
import Link from 'next/link'
import slider from '../utils/slide';
import { fadeIn } from '../variants';

function services() {
  return (
    <Layout title="Services">
      <AnimatePresence>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000
          }}
          className="mt-2 mb-24 xl:w-full lg:w-full md:w-full sm:w-9/12 card"
        >
          
            {slider.slides.map((slide, index) => {
              return (
                  <SwiperSlide>
                    <motion.div className='' variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}}>
                      <div className='' key={index}>
                        <Link href={`/product/${slide.slug}`}> 
                          <img src={slide.image} alt="KT" className='object-cover p-1 transition duration-300 ease-in-out bg-cover rounded-md hover:-translate-y-1 hover:scale-110 drop-shadow-lg' style={{height:'400px', width:'100%'}} />
                        </Link>   
                          
                      </div>
                    </motion.div>
                  </SwiperSlide>
              )
            })}
          
        </Swiper>
      </AnimatePresence>
      <AnimatePresence>
        <motion.h4 className="text-lg font-bold text-center text-sky-700" variants={fadeIn('left', 0.4)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.4}}>Découvrir nos services</motion.h4>        
        
        <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className="grid gap-2 p-5 mt-3 md:grid-cols-4" variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.2}}> 

            {data.products.map((product) => (
                <div className="relative overflow-hidden duration-300 rounded-xl group hover:scale-105 hover:shadow-md">
                  <Link href={`/product/${product.slug}`}>
                    <img src={product.image} alt="/" className="object-cover w-full h-64 rounded-xl" />
                  </Link>
                  <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-5 text-white transition-all duration-300 opacity-0 bg-black/50 rounded-xl -bottom-20 group-hover:bottom-0 group-hover:opacity-100">
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="mt-2 text-2xl font-bold">{product.name}</h3>
                  </Link>
                    <p className="p-3 mt-1 text-xl">{product.description.slice(0,90)+"..."}</p>
                    <Link href={`/product/${product.slug}`} className="btn">
                      En savoir plus
                    </Link>
                  </div>
                </div>
            ))}
        </motion.div>
          
      </AnimatePresence>
      
    </Layout>
  )
}

export default services
