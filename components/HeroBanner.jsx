import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  const { name: bannerProductName, slug: bannerProductSlug } = heroBanner;
  const { name: productProductName, slug: productProductSlug } = heroBanner.product;

  const isSameProduct = bannerProductName === productProductName;
  const slug = isSameProduct ? bannerProductSlug.current : '';

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="" className="hero-banner-image" />

        <div>
          {isSameProduct ? (
            <Link href={`/product/${slug}`}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link>
          ) : null}
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
