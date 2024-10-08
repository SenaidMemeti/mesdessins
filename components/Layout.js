import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { FaEnvelopeSquare, FaPhoneAlt, FaHome } from 'react-icons/fa'
import { MdPersonPin } from 'react-icons/md'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const products = [
  {
    name: 'Toitures',
    slug: 'Contruction, rénovation et couverture de toit',
    category: 'Travaux',
    image: '/images/toiture1.jpeg',
    image2: '/images/toiture2.jpeg',
    price: 70,
    brand: 'Toitures',
    rating: 4.5,
    numReviews: 8,
    countInStock: 20,
    description: "Souvent maussade, parfois radieuse et toujours capricieuse : la météo de notre plat pays laisse peu de répit à nos toitures. Une couverture résistante et solidement ancrée est indispensable afin de persister dans le temps et face aux intempéries. La société Toitures Bertrand met ses 20 ans d’expérience à votre disposition pour vos nouvelles toitures ou rénovations de toits."
  },
  {
    name: 'Ossatures bois',
    slug: 'Contruction, rénovation et extension',
    category: 'Travaux',
    image: '/images/ossature1.jpeg',
    image2: '/images/ossature2.jpeg',
    price: 80,
    brand: 'Ossatures bois',
    rating: 3.2,
    numReviews: 10,
    countInStock: 20,
    description: "L’ossature bois est la méthode de construction par excellence pour vos projets de rénovation et d’extension. Elle présente l’avantage majeur d’être plus écologique et d’assurer d’excellentes performances énergétiques à votre bien, puisque l’épaisseur de la structure est exclusivement constituée de matériaux isolants. Notre équipe aiguise constamment son savoir-faire et ses connaissances pour ériger vos projets en ossatures bois. De la structure de la construction à la toiture, nous vous offrons un service global. Vous pourrez vous reposer sur notre sérieux et notre minutie.",
  },
  {
    name: 'Ossatures métallique',
    slug: 'Contruction, rénovation et extension métallique',
    category: 'Travaux',
    image: '/images/ossaturemetallique.jpg',
    image2: '/images/ossaturemetallique.jpg',
    price: 80,
    brand: 'Ossatures métallique',
    rating: 3.2,
    numReviews: 10,
    countInStock: 20,
    description: "L’ossature bois est la méthode de construction par excellence pour vos projets de rénovation et d’extension. Elle présente l’avantage majeur d’être plus écologique et d’assurer d’excellentes performances énergétiques à votre bien, puisque l’épaisseur de la structure est exclusivement constituée de matériaux isolants. Notre équipe aiguise constamment son savoir-faire et ses connaissances pour ériger vos projets en ossatures bois. De la structure de la construction à la toiture, nous vous offrons un service global. Vous pourrez vous reposer sur notre sérieux et notre minutie.",
  },
  {
    name: 'Isolation',
    slug: 'Toitures et façades',
    category: 'Travaux',
    image: '/images/isolation1.jpeg',
    image2: '/images/isolation2.jpeg',
    price: 90,
    brand: 'Isolation',
    rating: 4.5,
    numReviews: 3,
    countInStock: 20,
    description: "Une large partie des déperditions d’énergie s’effectuent par la toiture. On estime qu’elle peuvent aller jusqu’à 30%. Un toit correctement isolé est indispensable pour assurer de bonnes performances énergétiques à votre habitation. Nous vous offrons un service complet et personnalisé afin d’offrir une isolation efficace à votre foyer. Nous prenons le temps d’examiner votre demande afin de vous proposer une solution qui rencontre vos objectifs de performance énergétique, souhaits et budget.",
  },
  // {
  //   name: "Charpentes",
  //   slug: 'Traditionnelles et préfabriquées',
  //   category: 'Travaux',
  //   image: '/images/charpente1.jpeg',
  //   image2: '/images/charpente2.jpeg',
  //   price: 90,
  //   brand: 'Charpentes',
  //   rating: 2.9,
  //   numReviews: 13,
  //   countInStock: 20,
  //   description: "L’équipe de Toitures Bertrand se déplace dans le Brabant Wallon, à Bruxelles et dans un rayon de 40km pour l’installation de vos charpentes traditionnelles ou charpentes préfabriquées pour toitures plates et en pente. Forts de plus de 20 ans d’expérience, nous concevons également vos extensions et rehaussons vos bâtiments.",
  // },
  {
    name: "Fondations",
    slug: 'Toitures et fondations',
    category: 'Travaux',
    image: '/images/fondation.jpeg',
    image2: '/images/fondation.jpeg',
    price: 90,
    brand: 'Fondations',
    rating: 2.9,
    numReviews: 13,
    countInStock: 20,
    description: "L’équipe de Toitures Bertrand se déplace dans le Brabant Wallon, à Bruxelles et dans un rayon de 40km pour l’installation de vos charpentes traditionnelles ou charpentes préfabriquées pour toitures plates et en pente. Forts de plus de 20 ans d’expérience, nous concevons également vos extensions et rehaussons vos bâtiments.",
  },
  {
    name: "Bétons",
    slug: 'bétons',
    category: 'Travaux',
    image: '/images/beton.jpg',
    image2: '/images/beton.jpg',
    price: 90,
    brand: 'Bétons',
    rating: 2.9,
    numReviews: 13,
    countInStock: 20,
    description: "L’équipe de Toitures Bertrand se déplace dans le Brabant Wallon, à Bruxelles et dans un rayon de 40km pour l’installation de vos charpentes traditionnelles ou charpentes préfabriquées pour toitures plates et en pente. Forts de plus de 20 ans d’expérience, nous concevons également vos extensions et rehaussons vos bâtiments.",
  },
  {
    name: "Installations",
    slug: 'Toitures et installations',
    category: 'Travaux',
    image: '/images/gouttiere.jpg',
    image2: '/images/gouttiere.jpg',
    price: 90,
    brand: 'Installations',
    rating: 2.9,
    numReviews: 13,
    countInStock: 20,
    description: "L’équipe de Toitures Bertrand se déplace dans le Brabant Wallon, à Bruxelles et dans un rayon de 40km pour l’installation de vos charpentes traditionnelles ou charpentes préfabriquées pour toitures plates et en pente. Forts de plus de 20 ans d’expérience, nous concevons également vos extensions et rehaussons vos bâtiments.",
  },
  {
    name: "Rénovations",
    slug: 'Toitures et rénovations',
    category: 'Travaux',
    image: '/images/renovation1.jpeg',
    image2: '/images/rénovation2.jpeg',
    price: 90,
    brand: 'Rénovations',
    rating: 2.9,
    numReviews: 13,
    countInStock: 20,
    description: "L’équipe de Toitures Bertrand se déplace dans le Brabant Wallon, à Bruxelles et dans un rayon de 40km pour l’installation de vos charpentes traditionnelles ou charpentes préfabriquées pour toitures plates et en pente. Forts de plus de 20 ans d’expérience, nous concevons également vos extensions et rehaussons vos bâtiments.",
  }
]

const Layout = ({title, children}) => {
  const [toggle, setToggle] = useState(false);
  const [showModalMaps, setShowModalMaps] = useState(false);
  const [showModalLogo, setShowModalLogo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //const [showModalPostuler, setShowModalPostuler] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>{title ? title + ' - Construction ' : 'Construction'} </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} className="flex flex-col justify-between min-h-screen">
        <header>
          <nav className="flex items-center justify-between h-16 px-4 text-white shadow-md bg-gradient-to-r from-blue-600 to-sky-500">
              <div className="flex gap-2">
                <img src="/images/construct.png" alt="Construction" className="object-cover w-12 h-12 bg-white rounded-full hover:scale-125" onClick={() => setShowModalLogo(true)} />
                {/* <h4 className="self-center text-xl font-medium tracking-wider text-white">
                  <Typewriter
                    options={{
                      strings: [
                        "CONSTRUCTION",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h4> */}
              </div>
            <div className="flex items-center justify-center space-x-2">
              <Link href="/">
                  <FaHome className="text-2xl font-bold" />
              </Link>
              <Link href="/services" className="p-2">
                Services
              </Link>
              <Link href="/rules" className="p-2">
                A propos
              </Link>
              <Link href="/activites" className="p-2">
                Consultances
              </Link>
              <Link href="/contact" className="p-2">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="container px-4 m-auto mt-4">
          {children}
        </main>

        <p className="p-6 mt-8 text-center border border-t-2 border-sky-600 focus-within:border-sky-700"> Vous souhaitez construire, rénover ou transformer votre maison? <Link href='/contact' className="w-full px-3 py-1 text-white bg-gradient-to-r from-sky-700 to-sky-500 cursor-progress">Contactez-nous</Link></p>

        <footer className="grid grid-cols-1 gap-6 p-5 text-white shadow-inner md:grid-cols-4 lg:grid-cols-4 bg-gradient-to-r from-blue-600 to-sky-500">
            <div className="">
              <h4 className="mb-6 font-bold text-md">KT Construct {currentYear}</h4>
              <h4>KT Construct s’occupe de tous les travaux de toiture : la construction, la transformation, la rénovation ou l’isolation de votre toiture en zinc, tuiles ou ardoises à Bruxelles et en Wallonie.</h4>
            </div>
            <div className="">
              <h4 className="mb-6 font-bold text-md"></h4>
              <h4></h4>
            </div>
            <div> 
              <h3 className="mb-5 text-2xl font-medium tracking-wider text-white">Contactez-nous !</h3>
              <div className="">
                <div className="flex space-x-2"> 
                  <h4 className=""></h4>  
                </div>
                <div className="flex space-x-2">
                  <MdPersonPin className="text-xl" />
                  <h4 className="">KT</h4>
                </div> 
                <div className="flex space-x-2">  
                  <FaPhoneAlt />
                  <h4 className="">+40 724 541 841</h4>
                </div>   
                
                <div className="flex space-x-2">
                  <GoLocation onClick={() => setShowModalMaps(true)} className="text-xl text-white animate-pulse" />           
                  <h4 className="" onClick={() => setShowModalMaps(true)}>8 Groenstraat, 1602 Sint-Pieters-Leeuw Belgique</h4>
                </div>
                
                <div className="flex space-x-2">
                  <FaEnvelopeSquare className="text-xl" />
                  <h4 className="email animate-pulse" onClick={() => window.open('mailto:cbotezatu0@gmail.com')}>cbotezatu0@gmail.com</h4> 
                </div> 
              </div>
            </div>
            <div> 
              <div className="flex gap-2">
                <img src="/images/construct.png" alt="Construction" className="object-cover w-8 h-8 bg-white rounded-full hover:scale-125" onClick={() => setShowModalLogo(true)} />
                <h4 className="mb-5 text-xl font-medium tracking-wider text-white">
                <Typewriter
                  options={{
                    strings: [
                      "CONSTRUCTION",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                </h4>
              </div>
              <div className="flex gap-2">
                <div className="flex space-x-1"> 
                  <Link href="/" className="p-1">
                    Accueil
                  </Link>
                </div>
                <div className="flex space-x-1"> 
                  <Link href="/services" className="p-1">
                    Services
                  </Link>
                </div>
                <div className="flex space-x-1"> 
                  <Link href="/rules" className="p-1">
                  A propos
                  </Link>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex space-x-1"> 
                  <Link href="/activites" className="p-1">
                    Consultances
                  </Link>
                </div>
                <div className="flex space-x-1"> 
                  <Link href="/contact" className="p-1">
                    Contact
                  </Link>
                </div>             
                
              </div>
            </div>
          
        </footer>
      </motion.div>

      {showModalMaps ? (
        <>
          <motion.div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto mx-auto my-6 max-w-7xl">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none border-0 outline-none text-sky-700 focus:outline-none"
                      onClick={() => setShowModalMaps(false)}
                    >
                    <span className="block w-6 h-6 text-sky-700">
                      ×
                    </span>
                  </button>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.1241749146166!2d4.249365715841334!3d50.8103379795266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c7000c893315%3A0xefc66c684e798a1f!2sGroenstraat%208%2C%201602%20Sint-Pieters-Leeuw!5e0!3m2!1sfr!2sbe!4v1672338390654!5m2!1sfr!2sbe" className="min-w-full rounded-lg" width="450" height="450" style={{border:0}} loading="lazy"></iframe>
              </div>
            </div>
          </motion.div>
        </>
      ) : null }

      {showModalLogo ? (
        <>
          <motion.div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto mx-auto my-6 max-w-7xl">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none border-0 outline-none text-sky-700 focus:outline-none"
                      onClick={() => setShowModalLogo(false)}
                    >
                    <span className="block w-6 h-6 text-sky-700">
                      ×
                    </span>
                  </button>
                  <img src="/images/construct.png" alt="Construction" className="object-cover p-2 bg-white rounded-full w-80 h-80 hover:scale-125" />
                  <div className="p-5">
                    <h4 className="font-bold text-md">KT</h4>
                    <h4 className=""></h4>
                    <h4 className="">8 Groenstraat 1602, Sint-Pieters-Leeuw</h4>
                                
                    <h4 className="mt-5">Tel: +40 724 541 841</h4>
                                
                    <h4 className="" onClick={() => window.open('mailto:cbotezatu0@gmail.com')}>Email: <i className="text-sky-700">cbotezatu0@gmail.com</i></h4>
                                
                  </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null }

    {showModal ? (
      <>
        <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black/50">
          <div className="relative w-8/12 my-1 overflow-x-hidden overflow-y-auto h-5/6">
            {/*content*/}
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none drop-shadow-2xl focus:outline-none">
                
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none border-0 outline-none text-sky-700 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  <span className="block w-6 h-6 text-sky-700">
                    ×
                  </span>
                </button>
                
                <div className="m-4">
                  
                    <>
                      <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className="grid w-full gap-6 mt-7 md:grid-cols-4 mb-7 h-7/12"> 
                          
                        {products.map((product) => (
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
                    </>
                                        
                </div>
              
            </div>
          </div>
        </div>
      </>
      ) : null }

    </>
    
  )
}

export default Layout