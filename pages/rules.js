import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { fadeIn } from '../variants'

const Rules = () => {

  return (
    <Layout title="Régles">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} 
        className="rules" 
        style={{
          padding:"50px",
          display:"flex",
          width:"100%"
        }}
      >
        <motion.div className="container items-center justify-center mx-auto place-items-center" variants={fadeIn('right', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.2}}>
          <div className="grid gap-20 md:grid-cols-2">
            <div>
              <ul className='rules'>
                <span style={{
                  fontSize:"1.4rem",
                  fontWeight:"800",
                  fontFamily:"Roboto",
                  }} className="text-2xl font-medium tracking-wider text-sky-700">A propos de nous?</span>
                  <h4 style={{
                    fontSize:"1.15rem",
                    fontWeight:"700",
                    fontFamily:"Roboto"
                  }} className="my-2 text-xl tracking-wider text-sky-700 font-small">Notre priorité, la satisfaction du client</h4>
                  <li className='mb-3'>Entreprise de construction, la société KT CONSTRUCT est basée au cœur de Bruxelles. La construction, la démolition, les aménagements extérieurs et intérieurs, l'électricité générale et la rénovation constituent une large palette de ses activités proposées sur tout le territoire Belge. Cette localisation au centre du pays permet d'engager ses équipes avec efficacité sur l'intégralité du territoire et ainsi d'étendre ses compétences jusqu'en Bruxelles et en Flandre.</li>
                  <li className="mb-3">Dynamique et en recherche permanente de nouveaux challenges, KT CONSTRUCT s'appuie sur son professionnalisme et son expérience. Ses équipes sont hautement qualifiées et mettent tout en œuvre pour servir au mieux ses nombreux clients avec rigueur.</li>
                  <li>Sa recherche constante de qualité et l'amélioration continue de la maîtrise des matériaux sont au cœur de son métier. KT CONSTRUCT a forgé sa réputation à travers une collaboration de partenaires sérieux et en mettant en œuvre son savoir-faire.</li>
              
                  {/* <h5 className="text-sky-600">Vision</h5>
                  <li>Construire avec vous une vie en société plus sereine.</li>
                  <h5 className="text-sky-600">Mission</h5>
                  <li>Garantir que la ville soit plus saine à travers nos actions de collectes et de traitement des déchets, de nettoiement et de pédagogie.</li>
                  <h5 className="text-sky-600">Valeurs</h5> */}
              
              </ul> 
            </div>
            <div className="gap-6 mt-4"> 
              {/* <iframe class="w-full aspect-video hover:aspect-square" src="https://www.youtube.com/embed/2CoUXo0M7A4"></iframe> */}

              {/* <iframe width="500" height="450" src="https://www.youtube.com/embed/4JDfGD_GSKk" className="object-cover aspect-video md:aspect-square" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                       */}
              <img src="/images/con1.jpg" alt="Construction" className="object-cover w-full p-2 bg-white h-96 hover:scale-125" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

export default Rules
