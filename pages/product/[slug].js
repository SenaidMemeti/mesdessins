import emailjs from 'emailjs-com';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from '../../components/Layout'
//import ProdItem from '../../components/ProdItems';
import data from '../../utils/data';
import { motion } from "framer-motion";
import ProductItem from '../../components/ProductItem';
import { FaAngleLeft } from 'react-icons/fa';
import { fadeIn } from '../../variants';

const Result = () => {
  return (
      <h3 className="text-sky-800">Merci pour votre message, nous y répondrons très bientôt...</h3>
  )
}

export default function ProductScreen() {
  const [articleNum, setArticleNum] = useState(4)
  const [showModalMaps, setShowModalMaps] = useState(false);
  const [result, showResult] = useState(false)
  const {query} = useRouter();
  const {slug} = query;
  const product = data.products.find((x) => x.slug === slug);

  if(!product){
    return <div>Page introuvable</div>
  }

  

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2fxz9n8', 'template_r7u9crg', e.target, 'cED5bvy_Gz3CcpJsf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
            e.target.reset();
            showResult(true)
    }

    setTimeout(() => {
        showResult(false)
    }, 9000)

    const slideLeft = () => {
      var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
      var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <>
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/" className="flex text-sky-700">
          <FaAngleLeft className="text-2xl font-bold" /> Retour
        </Link>
      </div>

      <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} className="flex items-center" variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}}>
        <div className="gap-4">
          
          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            
            <div className="p-4">
              <h4 className="my-4 text-3xl font-medium tracking-wider text-sky-700">GROS OEUVRE</h4>

              <div className="max-w-3xl mx-auto my-3">
                <div className="w-full h-96 sm:col-span-2 md:col-span-2 lg:col-span-2 card">
                  <img src={product.image} alt={product.name} className="float-left w-full h-full p-1 transition duration-300 ease-in-out delay-100 bg-cover hover:-translate-y-1 hover:scale-105 drop-shadow-lg" />
                </div>
                <ul>
                  <p className="mt-4 overflow-y-scroll">{product.description}</p>
                  <h1 className="mt-4 text-xl font-medium">1 - {product.titre1} :</h1>
                  <li>{product.li1}</li>
                  <li>{product.li2}</li>
                  <li>{product.li3}</li>
                </ul>
              </div>
              
            </div>
            
            <div className="p-4">
              <h4 className="my-4 text-3xl font-medium tracking-wider text-transparent">GROS OEUVRE</h4>
              <div className="max-w-3xl p-1 mx-auto my-2 rounded-md shadow-sm">
                <div>
                  <div className="overflow-y-scroll" style={{height:"700px"}}>
                    <ul>
                      <li>
                        <h1 className="text-xl font-bold">{product.name}</h1>
                      </li>
                      <li>
                        <h1 className="text-lg">{product.slug}</h1>
                      </li>
                      <hr className="mt-4 border-sky-700" />
                      {/* <li>Category: {product.category}</li> */}
                      {/* <li>Brand: {product.brand}</li> */}
                      {/* <li>
                        {product.rating} of {product.numReviews} reviews
                      </li> */}
                      <li className=''>
                        <h1 className="mt-4 text-xl font-bold"></h1> 

                        <ul>
                          <h1 className="mt-4 text-xl font-medium">2 - {product.titre2} :</h1>
                          <li>{product.li4}</li>
                          <li>{product.li5}</li>
                          <li>{product.li6}</li>
                          
                          <h1 className="mt-4 text-xl font-medium">3 - {product.titre3} :</h1>
                          <li>{product.li7}</li>
                          <li>{product.li8}</li>
                          <li>{product.li9}</li>
                        </ul>
                      </li>         
                    </ul>
                    <p className='mt-6'>{product.text}</p>
                  </div>
                  <div className="mt-8 mb-8 text-center">
                    <a className="w-full px-3 py-4 text-white bg-gradient-to-r from-sky-700 to-sky-500 cursor-progress" onClick={() => setShowModalMaps(true)}>Demandez un devis</a>
                  </div>
                  
                </div>
              </div>
              
            </div> 
          <div>
              <div className="gap-1 mt-1"> 
                <h4 className="my-4 text-3xl font-medium tracking-wider text-sky-700">SERVICES</h4>
                {data.products.map((product) => (
                  <ProductItem product={product} key={product.slug}></ProductItem>
                ))}
              </div>
            </div>         
          </div>

            <div className="flex px-2 py-1 pb-6 space-x-5 overflow-x-auto list-none">
              {/* <FaPlusCircle onClick={() => setArticleNum(articleNum + 1)} className="w-6 h-6 border rounded-full cursor-pointer text-sky-600 border-sky-600" /><FaMinusCircle onClick={() => setArticleNum(articleNum - 1)} className="w-6 h-6 border rounded-full cursor-pointer text-sky-600 border-sky-600" /> */}
              {/* <button onClick={() => setArticleNum(articleNum + 1)} className="px-3 py-1 mr-2 font-semibold bg-transparent border rounded-full text-sky-600 border-sky-600 hover:bg-grey hover:text-sky-700 hover:border-transparent">Voir plus</button>   */}
              {/* <button className="flex gap-4 px-3 py-1 mr-2 font-semibold bg-transparent border rounded-full text-sky-600 border-sky-600 hover:bg-grey hover:text-sky-700 hover:border-transparent"><FaPlusCircle onClick={() => setArticleNum(articleNum + 1)} className="w-6 h-6 border rounded-full cursor-pointer text-sky-600 border-sky-600" /><FaMinusCircle onClick={() => setArticleNum(articleNum - 1)} className="w-6 h-6 border rounded-full cursor-pointer text-sky-600 border-sky-600" /></button> */}
              {/* <button onClick={() => setArticleNum(articleNum - 1)} className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full text-sky-600 border-sky-600 hover:bg-grey hover:text-sky-700 hover:border-transparent"><FaMinusCircle /></button>  */}
            </div>
        </div>
      </motion.div>         
    </Layout>
    {showModalMaps ? (
      <>
        <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto mx-auto my-6 max-w-7xl">
            {/*content*/}
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-xl outline-none focus:outline-none">
              
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none border-0 outline-none text-sky-700 focus:outline-none"
                    onClick={() => setShowModalMaps(false)}
                  >
                  <span className="block w-6 h-6 text-sky-700">
                    ×
                  </span>
                </button>
                <div className="m-4">
                  
                                <form action="" onSubmit={sendEmail}>
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-12 pr-2 mb-4 sm:col-span-6 lg:col-span-6">
                                            <label htmlFor="nom" className="block mb-2 text-sm text-sky-600">Nom</label>
                                            <input type="text" name="nom" placeholder="John" required className="w-full px-3 py-2 border rounded-md placeholder-sky-300 border-sky-300 focus:outline-none dark:bg-sky-700 dark:text-white dark:placeholder-sky-400 dark:border-sky-400 dark:focus:border-sky-400" />
                                        </div>
                                        <div className="col-span-12 mb-4 sm:col-span-6 lg:col-span-6">
                                            <label htmlFor="prenom" className="block mb-2 text-sm text-sky-600">Prénom</label>
                                            <input type="text" name="prenom" placeholder="Doe" required className="w-full px-3 py-2 border rounded-md placeholder-sky-300 border-sky-300 focus:outline-none dark:bg-sky-700 dark:text-white dark:placeholder-sky-400 dark:border-sky-400 dark:focus:border-sky-400" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block mb-2 text-sm text-sky-600">Email</label>
                                        <input type="email" name="email" placeholder="xyz@exemple.com" required className="w-full px-3 py-2 border rounded-md placeholder-sky-300 border-sky-300 focus:outline-none dark:bg-sky-700 dark:text-white dark:placeholder-sky-400 dark:border-sky-400 dark:focus:border-sky-400" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="sujet" className="text-sm text-sky-600">Téléphone</label>
                                        <input type="text" name="sujet" placeholder="00000" required className="w-full px-3 py-2 border rounded-md placeholder-sky-300 border-sky-300 focus:outline-none dark:bg-sky-700 dark:text-white dark:placeholder-sky-400 dark:border-sky-400 dark:focus:border-sky-400" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block mb-2 text-sm text-sky-600">Message</label>

                                        <textarea placeholder="Votre message" name="message" className="w-full px-3 py-2 border rounded-md placeholder-sky-300 border-sky-300 focus:outline-none dark:bg-sky-700 dark:text-white dark:placeholder-sky-400 dark:border-sky-400 dark:focus:border-sky-400" />
                                    </div>
                                    <div className="mb-4">
                                      <div className="grid grid-cols-12">
                                        <div className="col-span-12 pr-2 mb-4 sm:col-span-6 lg:col-span-6">
                                          <button className="w-full px-3 py-2 text-white bg-gradient-to-r from-blue-400 to-sky-400 cursor-progress">Envoyer</button>
                                        </div>
                                        <div className="col-span-12 pr-2 mb-4 sm:col-span-6 lg:col-span-6">
                                          <button className="w-full px-3 py-2 text-blue-400 border border-sky-400"
                                              onClick={() => setShowModalMaps(false)}
                                            >
                                            Fermer
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex text-center">
                                        { result ? <Result /> : null } 
                                    </div>
                                </form>                     
                            </div>
            </div>
          </div>
        </div>
      </>
    ) : null }
    </>
  )
}