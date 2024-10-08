import React from 'react'
import Layout from '../components/Layout'
import { AnimatePresence, motion } from "framer-motion";
import { Swiper } from 'swiper/react';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import data from '../utils/data';

function activites() {
  SwiperCore.use([Autoplay])

  return (
    <Layout title="Activités">
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-1 place-items-center"
        >
          <h4 className="mt-6 text-lg font-bold text-center text-sky-700">KT CONSTRUCT, entrepreneur de construction maison spécialisé dans les travaux de gros œuvre et de construction maison en Belgique.</h4>
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center space-x-1 place-items-center">
          <h5 className="mt-6 font-bold text-center text-md text-sky-600">Pour la réalisation d'une construction neuve ou pour la rénovation d’un bâtiment existant, vous traitez avec un seul interlocuteur. Vous passez donc un seul et unique contact et un seul responsable pour tous les travaux.</h5>
        </motion.div>
        <p className="mt-6 text-center">Si vous avez besoin d'un entrepreneur général en construction pour devis détaillé des services de travaux de rénovation urgent alors Clic sur DEMANDE DE DEVIS, envoyez-nous vos coordonnées ainsi que vos données de travail et vous serez contacté par un de nos spécialistes. C'est simple! <Link href='/contact' className="w-full px-1 py-1 text-white bg-gradient-to-r from-sky-700 to-sky-500 cursor-progress">Demande de devis</Link></p>
          {/* <div className="grid gap-6 mt-7 md:grid-cols-4">   
            {data.products.map((product) => (
              <ProductItem product={product} key={product.slug}></ProductItem>
            ))}
          </div> */}

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000
          }}
          className="mt-10 mb-24 xl:w-6/12 lg:w-10/12 md:w-full sm:w-9/12 card"
        >
          
            
          
        </Swiper>

        {/* <div className="">
          <Swiper slidesPerView={1} spaceBetween={50} navigation={true} modules={[Navigation]} breakpoints={{ 
            700: {
              slidesPerView: 1
            } 
          }} className='mt-7 categorieSlider min-h-[500px] card'> 
            {categories.map((categorie, index) => {
              return (
                <>
                  <SwiperSlide className='min-h-[400px] rounded-md py-6 px-8 mt-1' key={index}>
                    <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-16'>
                      <Link href={`/product/${categorie.slug}`}> 
                        <img src={categorie.image} alt="CONSTRUCT" className='object-fill p-1 transition duration-300 ease-in-out delay-150 bg-cover rounded-md max-w-[300px] h-72 hover:rounded-full hover:-translate-y-1 hover:scale-110 drop-shadow-lg' />
                      </Link>   
                        <div className='flex flex-col gap-y-5'>
                          <div className='flex items-center text-2xl font-medium gap-x-2'>
                            {categorie.name}
                            <div className='h-[3px] w-[40px] bg-blue-600 rounded'></div>
                          </div>
                          <div className='h-40 text-sky-600'>{categorie.description.slice(0,200)+"..."}</div>
                          <div>
                            <Link href={`/product/${categorie.slug}`} className='btn'>En savoir plus</Link>
                          </div>
                        </div>
                    </div>
                  </SwiperSlide>
                </>
              )
            })
          }
          </Swiper>
        </div> */}
      </AnimatePresence>

      <Marquee className="w-full my-10">
        {data.products.map((product, index) => (
          <Link href={`/product/${product.slug}`}> 
            <img src={product.image} alt="CONSTRUCT" className='object-fill p-1 transition duration-300 ease-in-out delay-150 bg-cover rounded-md max-w-[300px] h-72 hover:rounded-full hover:-translate-y-1 hover:scale-110 drop-shadow-lg' />
          </Link> 
        ))}
      </Marquee>
      
    </Layout>
  )
}

export default activites