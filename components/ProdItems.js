/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { fadeIn } from '../variants';

export default function ProdItem({ product, addToCartHandler }) {
  return (
    <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className="p-5 card">
      <Link href={`/product/${product.slug}`}>
        <div className="flex px-3 py-2 space-x-5 overflow-x-auto list-none">
          <Link href={`/product/${product.slug}`}>
            <img
                src={product.image}
                alt={product.name}
                className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"
              />
          </Link>
        </div>
      </Link>
    </motion.div>
  );
}
