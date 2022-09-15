import React from 'react';
import graphLine from 'assets/icons/graph.svg';
import Select from 'components/Select/Select';
import Back from 'assets/icons/back.svg';
import Next from 'assets/icons/next.svg';
import styles from './chart.module.scss';

interface type {
    date?: string;
    img?: string;
}

const Chart = ({ date, img }: type) => {
    return (
        <div className={styles.graph}>
            <div className={styles.graph__top}>
                <div className={styles.graph__date}>{date}</div>
                <div className={styles.graph__btns}>
                    <div className={styles.graph__select}>
                        <Select placeholder="Filter" label={''} />
                    </div>
                    <div className={styles.graph__toggle}>
                        <button>
                            <img src={Back} />
                        </button>
                        <button>
                            <img src={Next} />

                        </button>

                    </div>
                </div>
            </div>
            <div className={styles.graph__months}>
                <p>Jan</p>
                <p>Feb</p>
                <p>Mar</p>
                <p>Apr</p>
                <p>May</p>
                <p>Jun</p>
            </div>

            <img src={graphLine} className={styles.graph__img} />

        </div>

    )
}

export default Chart;
