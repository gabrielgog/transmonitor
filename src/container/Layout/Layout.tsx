import React from 'react';
import { Sidebar } from 'components/Sidebar/index'
import Header from 'components/Header/Header';
import styles from './layout.module.scss';



interface prop {
    children: JSX.Element,

}

const Layout = ({ children }: prop) => {
    return (
        <div className={styles.main__layout}>
            <Sidebar />
            <Header />
            <section className={styles.main__page}>
                <div>{children}</div>
            </section>
        </div>
    )
}

export default Layout