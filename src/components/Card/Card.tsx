import React from 'react';
import styles from './card.module.scss';

interface type {
  title?: string
  subtitle?: string
  img?: string,
  children?: JSX.Element
}

const Card = ({ title, subtitle, img, children }: type) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__stitle}>{subtitle}</p>
      </div>
      <img src={img} alt="metric card" />
      <div>{children}</div>
    </div>
  )
}

export default Card;
