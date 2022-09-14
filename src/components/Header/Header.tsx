import React from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from 'components/Avatar/Avatar';
import SearchBox from 'components/Search/Search';
import Logo from 'assets/icons/logo.svg';
import Notification from 'assets/icons/notification.svg';
import profileImg from 'assets/images/profile-img.png';
import styles from './header.module.scss';


const Header = () => {
    const location = useLocation()

    const headerTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Overview'
            case '/payments':
                return 'Payments'
            case '/reconcile-payments':
                return `Reconcile Payments`
            default:
                return ""
        }
    }
    return (
        <div className={styles.header}>
            <header>
                <div className={styles.header__logo}>
                    <img src={Logo} />
                    <SearchBox placeholder='Search...' main />
                </div>

                <div className={styles.header__title}>
                    <p>Support</p>
                    <p>FAQ</p>
                    <img src={Notification} />
                    <div className={styles.header__title_avatar}>
                        <p className={styles.header__title_avatar_greet}>Hello</p>
                        <p>Oluwaleke Ojo</p>
                        <Avatar name='Gabriel Godwin' url={profileImg} />
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header;

