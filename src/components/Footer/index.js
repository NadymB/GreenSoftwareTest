import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import images from '../../asset/images';

const cx = classNames.bind(styles);

export const Footer = () => {
    return (
        <footer className={cx('footer', 'row')}>
            <div className={cx('footer__menu', 'col-6', 'first')}>
                <Link className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <Link className={cx('logo__content')}>
                    Various kinds of NFT that are trending the trend will be reset and every week creator will show NFT
                </Link>
            </div>
            <div className={cx('footer__menu', 'col-2')}>
                <Link className={cx('title')}>Categories</Link>

                <Link className={cx('sub__title')}>Art</Link>

                <Link className={cx('sub__title')}>Collections</Link>

                <Link className={cx('sub__title')}>Domain Name</Link>

                <Link className={cx('sub__title')}>Create NFT</Link>
            </div>
            <div className={cx('footer__menu', 'col-2')}>
                <Link className={cx('title')}>Contact us</Link>

                <Link className={cx('sub__title')}>Platform Status</Link>

                <Link className={cx('sub__title')}>Customer services</Link>

                <Link className={cx('sub__title')}>Partners</Link>

                <Link className={cx('sub__title')}>Privacy policy</Link>
            </div>
            <div className={cx('footer__menu', 'col-2')}>
                <Link className={cx('title')}>Get in touch</Link>

                <Link className={cx('sub__title')}>Indonesia Jl. Griya Permata Hijau no D1 Sukabumi Utara 543881</Link>

                <span>
                    <img className={cx('social__item')} src={images.facebook} alt="facebook" />
                    <img className={cx('social__item')} src={images.instagram} alt="instagram" />
                    <img className={cx('social__item')} src={images.twitter} alt="twitter" />
                </span>
            </div>
        </footer>
    );
};
