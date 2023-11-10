import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import images from '../../asset/images';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export const Slider = () => {
    const [showText, setShowText] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY > 410) {
            setShowText(true);
        } else {
            setShowText(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx(`${showText && 'content'}`)}>
                <h1 className={cx('title')}>How to bling charge</h1>
                <p className={cx('sub__title')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className={cx('slider__wrapper')}>
                <div className={cx('bg__slider')}></div>
                <div className={cx('slider', 'row')}>
                    <div className={cx('col-5', 'tranform__img')}>
                        <img src={images.slider} alt="slider" width="100%" />
                    </div>
                    <div className={cx('slider__item', 'col-7')}>
                        <h2 className={cx('slider__title')}>nFT to the bone makes you collect project 3D</h2>
                        <p className={cx('slider__sub__title')}>
                            We are a community based collection project featuring 3D and NFT artwork. Cool 3D from me
                            and comes in all kinds of evil shape traits and sizes with a few surprises along the way
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
