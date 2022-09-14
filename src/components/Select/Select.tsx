import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Listbox, Transition } from '@headlessui/react';
import styles from './select.module.scss';

interface type {
    disabled?: boolean
    selected?: any
    placeholder?: string
    options?: any
    label?: string,
    props?: () => void
    handleChange?: () => void
}

const Select = ({
    disabled,
    selected,
    placeholder,
    options,
    label,
    props,
    handleChange,
}: type) => {
    return (
        <div className={classnames(styles.select__wrapper)} {...props}>
            <span className={styles.select__label}>{label}</span>
            <Listbox
                disabled={disabled}
                value={selected}
                onChange={handleChange}
            >
                <div>
                    <Listbox.Button
                        className={classnames(styles.select__btn, disabled ? styles.select__disabled : '')}
                    >
                        <div style={{ textTransform: 'capitalize' }}>
                            <span>{selected?.name || placeholder}</span>
                        </div>
                        <span className={styles.select__icon}>
                            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="m.793 5.207 1.414-1.414L8 9.586l5.793-5.793 1.414 1.414L8 12.414.793 5.207Z"
                                    fill="#363740"
                                />
                            </svg>
                        </span>
                    </Listbox.Button>
                    <Transition as={Fragment}>
                        <Listbox.Options className={styles?.select__dropdown}>
                            {options?.length ? (
                                options?.map((option: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, optionIdx: React.Key | null | undefined) => (
                                    <Listbox.Option
                                        key={optionIdx}
                                        className={({ selected }) =>
                                            `${selected
                                                ? classnames(styles.select__item, styles.active)
                                                : styles.select__item
                                            }`
                                        }
                                        value={option}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}
                                                >
                                                    {option?.name}
                                                </span>
                                                {selected ? (
                                                    <span>
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42Z"
                                                                fill="#363740"
                                                            />
                                                        </svg>
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))
                            ) : (
                                <span className={styles.select__item}>No options available</span>
                            )}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};


export default Select;
