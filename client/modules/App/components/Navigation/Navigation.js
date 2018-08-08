import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Navigation.css';

export const Navigation = (props, context) => {
    return <div className={styles['navigation']}>
        <ul className={styles['navigation-list']}>
            <li>
                <Link className={styles['navigation-link']} to={"/home"} >
                    <FormattedMessage id="siteHome" />
                </Link>
            </li>
            <li>
                <Link className={styles['navigation-link']} to={"/"} >
                    <FormattedMessage id="sitePosts" />
                </Link>
            </li>
            <li>
                <Link className={styles['navigation-link']} to={"/about"} >
                    <FormattedMessage id="siteAbout" />
                </Link>
            </li>
        </ul>
    </div>
};

Navigation.propTypes = {
};

export default Navigation;
