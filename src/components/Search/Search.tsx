import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../assets/icons/search-icon.svg';
import styles from './search.module.scss';

interface props {
    placeholder: string,
    name: string,
    onChange: () => void;
    searchValue: () => void;
    main?: boolean

}

const SearchBox = ({ placeholder, name, main, onChange }: props) => {
    return (
        <div className={styles.search}>
            {main ?
                <input
                    placeholder={placeholder}
                    name={name}
                    onChange={() => onChange()}
                    style={{ border: 'none' }}

                />
                : (
                    <input
                        placeholder={placeholder}
                        name={name}
                        onChange={() => onChange()}

                    />
                )}
            <img
                src={Search}
                width="13.54px"
                height="13.54px"
                alt="search"
                aria-hidden
            />
        </div>
    );
};

SearchBox.defaultProps = {
    onChange: null,
    onSearch: null,
    name: '',
    placeholder: '',
    searchValue: ''
};

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    searchValue: PropTypes.string,
    onSearch: PropTypes.func,
    dataTestId: PropTypes.string
};

export default SearchBox;
