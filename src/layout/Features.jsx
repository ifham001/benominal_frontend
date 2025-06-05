'use client';

import ProductSubDisplay from '@/ui/product/ProductSubDisplay';
import React from 'react';
import necklace from '../../public/collection/neck.png';

function Features() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex font mt-10 md:mt-20 flex-col items-center justify-center text-center px-4">
        <p className="text-3xl sm:text-xl md:text-6xl font-extralight text-[#1B4332]">
          New Arrivals - Designed to Turn Heads
        </p>
        <p className="text-xl sm:text-3xl md:text-3xl text-[#83918B] mt-8">
          Discover our bestselling styles and the latest drops.
        </p>
      </div>

      {/* Scrollable Section */}
      <div className="overflow-x-auto custom-scrollbar mt-8">
        <div className="flex gap-4 px-4 w-max">
          <ProductSubDisplay
            title={'Heart Necklace'}
            price={499}
            description={'Get limited edition heart shape necklace'}
            image={necklace}
            color={'gold'}
          />
          <ProductSubDisplay
            title={'Moon Pendant'}
            price={549}
            description={'Elegant moon design magnetic pendant'}
            image={necklace}
            color={'silver'}
          />
          <ProductSubDisplay
            title={'Star Choker'}
            price={599}
            description={'Trendy star-shaped choker necklace'}
            image={necklace}
            color={'rose gold'}
          />
          <ProductSubDisplay
            title={'Angel Chain'}
            price={499}
            description={'Simple angelic chain with fine finish'}
            image={necklace}
            color={'gold'}
          />
          <ProductSubDisplay
            title={'Heart Necklace'}
            price={499}
            description={'Get limited edition heart shape necklace'}
            image={necklace}
            color={'gold'}
          />
          <ProductSubDisplay
            title={'Moon Pendant'}
            price={549}
            description={'Elegant moon design magnetic pendant'}
            image={necklace}
            color={'silver'}
          />
          <ProductSubDisplay
            title={'Star Choker'}
            price={599}
            description={'Trendy star-shaped choker necklace'}
            image={necklace}
            color={'rose gold'}
          />
          <ProductSubDisplay
            title={'Angel Chain'}
            price={499}
            description={'Simple angelic chain with fine finish'}
            image={necklace}
            color={'gold'}
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
