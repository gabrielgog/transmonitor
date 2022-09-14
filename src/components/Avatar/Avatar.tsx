import React from 'react';
import classNames from 'classnames';
import styles from './avatar.module.scss';

type Props = {
    name: string,
    url?: string;
}

const index = ({ name, url }: Props) => {
    return (
        <span className={styles.avatar}>
            <div>
                {url ? <img src={url} className={styles.header__img} /> : (
                    <span className={classNames(styles.avatar__profile)}>
                        {name.split(' ')[0]?.charAt(0)?.toUpperCase()}
                        {name.split(' ')[1]?.charAt(0)?.toUpperCase()}
                    </span>
                )}
            </div>

        </span>
    )
}

export default index;
