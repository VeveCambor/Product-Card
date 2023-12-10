import React from 'react';

import Card from './Card'
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <>
    <section className={styles.wrapTitle}>
      <div className={styles.pageTitle} aria-hidden="true">
        LENOVO shop
      </div>
    </section>
    <Card>
      <div className={styles.wrapper}>
        <img
          className={styles.productPhoto}
          alt={product.imageAlt}
          src={product.imageSrc}
        />
        <h2>
          {product.title}
        </h2>
       <div className={styles.description}>
        <ul>
          <li>Certifikovaný s Intel® Evo™ a až Intel® vPro®</li>
          <li>Dvojnásobná paměť a úložiště oproti předchozí generaci</li>
          <li>Ohromující možnost OLED displeje s vysokým rozlišením s certifikací Eyesafe®</li>
          <li>4 × 360° mikrofony s redukcí hluku založené na umělé inteligenci a Dolby Voice®</li>
          <li>Špičková bezpečnost a testování odolnosti podle MIL-SPEC</li>
          <li>Komunikační panel připravený k posílení spolupráce</li>
        </ul>
       </div>
        <p className={styles.price}>
          {product.price}
        </p>
        <button>
          Add to cart
        </button>
      </div>
    </Card>
      </>
  );
}

export default ProductCard;