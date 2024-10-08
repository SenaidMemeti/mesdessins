/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

export default function ProductItem({ product, addToCartHandler }) {

  return (
    <motion.div
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }} className="p-1 snap-start card hover:bg-sky-500" variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}}>
      <div className="flex flex-col items-center justify-center">
        <Link href={`/product/${product.slug}`}>
          
            <h2 className="text-lg text-sky-700 hover:text-white">{product.name}</h2>
          
        </Link>
      </div>

    </motion.div>
    
  );
}
