import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import images from '../../asset/images';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export const Header = () => {
    const [className, setClassName] = useState('wrapper');
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setClassName('nav__black');
        } else {
            setClassName('wrapper');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    });
    return (
        <div className={cx({ [className]: className })} onScroll={controlNavbar}>
            <header className={cx('header')}>
                <Link to="/" className={cx('header__logo')}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <nav className={cx('header__menu')}>
                    <ul className={cx('header__menu__list')}>
                        <li className={cx('header__menu__item')}>
                            <Link className={cx('header__menu__link')} to="/how-to-play">
                                How to play
                            </Link>
                        </li>
                        <li className={cx('header__menu__item')}>
                            <Link className={cx('header__menu__link')} to="/token">
                                Token
                            </Link>
                        </li>
                        <li className={cx('header__menu__item')}>
                            <Link className={cx('header__menu__link')} to="/pogs">
                                Pogs
                            </Link>
                        </li>
                        <li className={cx('header__menu__item')}>
                            <Link className={cx('header__menu__link')} to="/help">
                                Help
                            </Link>
                        </li>
                        <li className={cx('header__menu__item')}>
                            <Link className={cx('header__menu__link')} to="/contact-us">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};
