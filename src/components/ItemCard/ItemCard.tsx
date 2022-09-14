import React from 'react';
import styles from './item.module.scss';
import Meter from 'assets/icons/meter.svg';

interface type {
    payment_title?: string
    pending?: string
    reconciled?: string
    total_order?: string
    order_title?: string
    unrecon_payment?: string
    recon_payment?: string
    total_payment?: string
    type?: 'order' | 'payment'
}

const ItemCard = ({ payment_title, pending, reconciled, total_order, order_title, unrecon_payment, recon_payment, total_payment, type }: type) => {
    return (
        <div className={styles.item}>
            {type === 'order' ? (
                <div>
                    <div className={styles.item__heading}>
                        <h1>{order_title}</h1>
                        <img src={Meter} />
                    </div>
                    <div className={styles.item__flex}>
                        <p>Pending Orders:</p>
                        <p className={styles.item__pending}>{pending}</p>
                    </div>
                    <div className={styles.item__flex}>
                        <p>Reconcilled Orders:</p>
                        <p className={styles.item__recon}>{reconciled}</p>
                    </div>
                    <div className={styles.item__flex}>
                        <p>Total Orders:</p>
                        <p>{total_order}</p>
                    </div>
                </div>
            ) : <div>
                <div className={styles.item__heading}>
                    <h1>{payment_title}</h1>
                    <img src={Meter} />
                </div>
                <div className={styles.item__flex}>
                    <p>Un-reconcilled Payments:</p>
                    <p className={styles.item__pending}>{unrecon_payment}</p>
                </div>
                <div className={styles.item__flex}>
                    <p>Reconcilled Payments:</p>
                    <p className={styles.item__recon}>{recon_payment}</p>
                </div>
                <div className={styles.item__flex}>
                    <p>Total Payments:</p>
                    <p className={styles.item__total}>{total_payment}</p>
                </div>

            </div>}
        </div>
    )
}

export default ItemCard;
