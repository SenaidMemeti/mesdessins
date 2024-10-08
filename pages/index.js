import Layout from "../components/Layout";
import data from "../utils/data";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { useState } from "react";
import slider from "../utils/slide";
import { fadeIn } from "../variants";

export default function Home() {
  const [articleNum, setArticleNum] = useState(4);
  const [img, setImg] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const loadMoreHandler = () => {
    setArticleNum(prev => prev + 4);
  }

  SwiperCore.use([Autoplay])

  return (
    <Layout title="Accueil" className="min-w-full">
      <AnimatePresence>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000
          }}
          className="mt-2 mb-24 xl:w-full lg:w-full md:w-full sm:w-9/12"
        >
          
            {slider.slides.map((slide, index) => {
              return (
                  <SwiperSlide>
                    <motion.div className='' variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.1}}>
                      <div className='' key={index}>
                        <Link href={`/product/${slide.slug}`}> 
                          <img src={slide.image} alt="Caté" className='object-cover p-1 transition duration-300 ease-in-out bg-cover rounded-md hover:-translate-y-1 hover:scale-110 drop-shadow-lg' style={{height:'600px', width:'100%'}} />
                        </Link>   
                          
                      </div>
                    </motion.div>
                  </SwiperSlide>
              )
            })}
          
        </Swiper>
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} className="grid grid-cols-1 gap-4 mt-5">
        <div className="">
          <h1 className="text-lg font-bold text-center text-sky-700">Société de construction Bruxelles</h1>
          <h4 className="mt-4 font-bold text-center text-sky-600 text-md"></h4>
          <p className="container px-5 mt-4 text-center">Situé à Bruxelles, KT Construct est une société spécialisée dans la construction et la rénovation de bâtiments.
          {/* Patron sur chantier – 18 ans d’expérience, la précision est une garantie pour nos clients. */}</p>

          <motion.div className="grid gap-6 mt-7 md:grid-cols-3 sm:grid-cols-3" variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.4}}>
            <div className="p-10">
              <img src="/images/brique.jpg" alt="CONSTRUCT" className="object-cover w-full h-64 mt-5 shadow-xl opacity-75 hover:opacity-100" onClick={() => setShowModal(true)} />
              <p className="mt-5">Construction, gros-œuvre, maçonnerie, plafonnage, cimentage, chape. Travaux de démolition, toiture...</p>
              <button className="text-sky-600" onClick={() => setShowModal(true)}>Lire plus</button>
            </div>
            <div className="p-10">
              <img src="/images/posep.jpg" alt="CONSTRUCT" className="object-cover w-full h-64 mt-5 shadow-xl opacity-75 hover:opacity-100" onClick={() => setShowModal1(true)} />
              <p className="mt-5">Peinture intérieure et extérieure. Réfection de façade, sablage des murs extérieurs, pose d’enduis ou crépis...</p>
              <button className="text-sky-600" onClick={() => setShowModal1(true)}>Lire plus</button>
            </div>
            <div className="p-10">
              <img src="/images/velux.jpg" alt="CONSTRUCT" className="object-cover w-full h-64 mt-5 shadow-xl opacity-75 hover:opacity-100" onClick={() => setShowModal2(true)} />
              <p className="mt-5">KT Construct propose et réalise l’aménagement de votre intérieur, des combles et du grenier, la transformation...</p>
              <button className="text-sky-600" onClick={() => setShowModal2(true)}>Lire plus</button>
            </div>
            
          </motion.div>

          <h3 className="mt-4 mb-4 font-bold text-center text-sky-600 text-md"> Faites appel à des professionnels pour vos travaux de construction et rénovation</h3>
          <ul className="mb-5 text-center">
            <li>Un travail soigné par des ouvriers qualifiés</li>
            <li>Efficacité, compétence et respect des délais</li>
            <li>Fiabilité, qualité de services</li>
            <li>Prix négociable avec le client ainsi conseille</li>
            {/* <li>Devis gratuit et détaillé</li> */}
          </ul>

        </div>
        <h4 className="text-lg font-bold text-center text-sky-700">Découvrir nos services</h4>
          <motion.div animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className="grid gap-3 mt-7 md:grid-cols-4 mb-7" variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.1}}> 

            {img?.products.slice(0, articleNum).map((product) => (
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
            {articleNum < img.length && data.length > 8 && (<button onClick={loadMoreHandler} className="pb-3 pl-4 text-sky-400 hover:text-sky-500">Voir plus</button>)}
          </motion.div>          
      </motion.div>

      {showModal ? (
      <>
        <motion.div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black/50">
            <div className="relative w-auto max-w-xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none border-0 outline-none text-sky-700 focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                    <span className="block w-6 h-6 text-sky-700">
                      ×
                    </span>
                  </button>
                  <div className="p-10">
                    <img src="/images/brique.jpg" alt="CONSTRUCT" className="object-cover w-64 h-full mt-1 shadow-xl opacity-75 sm:w-full hover:opacity-100" />
                    <p className="mt-5">Construction, gros-œuvre, maçonnerie, plafonnage, cimentage, chape. Travaux de démolition, toiture, étanchéité, corniche, plate-forme, pose de fenêtres sur mesure, installation, remplacement de châssis, velux et coupole.</p>
                  </div>
              </div>
            </div>
          </motion.div>
      </>
      ) : null }
      {showModal1 ? (
      <>
        <motion.div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black/50">
            <div className="relative w-auto max-w-xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none border-0 outline-none text-sky-700 focus:outline-none"
                      onClick={() => setShowModal1(false)}
                    >
                    <span className="block w-6 h-6 text-sky-700">
                      ×
                    </span>
                  </button>
                  <div className="p-10">
                    <img src="/images/posep.jpg" alt="CONSTRUCT" className="object-cover w-64 h-full mt-1 shadow-lg opacity-75 sm:w-full hover:opacity-100" />
                    <p className="mt-5">Peinture intérieure et extérieure. Réfection de façade, sablage des murs extérieurs, pose d’enduis ou crépis, isolation, traitement de l’humidité, injections et cuvelage. Carrelage, pose de pierres naturelles, parquet.</p>
                  </div>
              </div>
            </div>
          </motion.div>
      </>
      ) : null }
      {showModal2 ? (
      <>
        <motion.div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black/50">
            <div className="relative w-auto max-w-xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none border-0 outline-none text-sky-700 focus:outline-none"
                      onClick={() => setShowModal2(false)}
                    >
                    <span className="block w-6 h-6 text-sky-700">
                      ×
                    </span>
                  </button>
                  <div className="p-10">
                    <img src="/images/velux.jpg" alt="CONSTRUCT" className="object-cover w-64 h-full mt-1 shadow-lg opacity-75 sm:w-full hover:opacity-100" />
                    <p className="mt-5">KT Construct propose et réalise l’aménagement de votre intérieur, des combles et du grenier, la transformation de votre salle de bain ou l’agrandissement de la cuisine, pour l’ensemble de ces travaux, vous disposez d’un seul interlocuteur.</p>
                  </div>
              </div>
            </div>
          </motion.div>
      </>
      ) : null }
    </Layout>
  )
}
