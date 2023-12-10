import React from 'react';

import styles from './Card.module.css';

function Card({
  // shadow = 2, 
  children,
}) {
  // const boxShadow = `var(--shadow-${shadow})`;

  return (
    <div
      className={styles.card}
      // style={{ boxShadow }}
    >
      {children}
    </div>
  );
}

export default Card;