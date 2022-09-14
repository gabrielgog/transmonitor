import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from 'config/navLinks';
import styles from './sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__menu}>
                <button>GENERATE INVOICE</button>
                {navLinks.map((link, index) => {
                    if (index === 0) {
                        return (
                            <div key={index} className={styles.wrapper__divide}>
                                <span className={styles.wrapper__orders}>Main</span>
                                <NavLink to={link.url}
                                    className={({ isActive }) => (isActive ? styles.wrapper__active : '')}
                                >

                                    <li className={styles.wrapper__link}>
                                        <img className={styles.wrapper__link} src={link.icon} />
                                        <span className={styles.wrapper__link_text}>{link.title}</span>
                                    </li>
                                </NavLink>
                            </div>
                        );
                    }

                    if (index === 1) {
                        return (
                            <div key={index} className={styles.wrapper__divide}>
                                <span className={styles.wrapper__orders}>Payments</span>


                                <li className={styles.wrapper__link}>
                                    <img src={link.icon} />
                                    <span>{link.title}</span>
                                </li>
                            </div>
                        );
                    }

                    if (index === 4 || index === 9) {
                        return (
                            <div key={index} className={styles.wrapper__divide}>
                                <span className={styles.wrapper__orders}>Orders</span>
                            </div>
                        );
                    }

                    return (
                        <div key={index}>
                            <div className={styles.sidebar__divider}></div>

                            <li className={styles.wrapper__link}>
                                <img src={link.icon} />
                                <span>{link.title}</span>
                            </li>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Sidebar;
