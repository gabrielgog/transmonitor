import React from 'react';
import styles from './indicator.module.scss';
import classnames from 'classnames';

interface type {
    isActive: string
    children?: JSX.Element,
    color?: string
}

const Indicator = ({ isActive, children, color }: type) => {
    const activeClass = () => {
        if (isActive) {
            return styles[`indicator__${isActive}`]
        }
    };

    const getColor = (e: any) => {
        if (e === 'pending') {
            return '#ebc315'
        } else if (e === 'reconciled') {
            return '#27ae60'
        }
        else {
            return '#7f8fa4'
        }
    }

    return (
        <span className={classnames(styles.indicator, activeClass(), `${styles[isActive]}`)}>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4.5" cy="4.5" r="4.5" fill={getColor(color)} />
            </svg>

            <p>{children}</p>
        </span>
    );
};



export default Indicator;
