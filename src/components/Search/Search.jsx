import React from 'react'
import styles from './Search.module.css'
import classNames from 'classnames'

function Search({
                    value,
                    onChange,
                    children='Search',
                    placeholder='search...'
}) {
    const inputClass = classNames({
        [styles.input]: true,
        [styles.filled]: value.length
    })
    return (
        <label className={styles.label}>
            {children}
            <input
                className={inputClass}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    )
}

export default Search