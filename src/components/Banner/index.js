import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import images from '../../asset/images';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

export const Banner = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const controlBanner =  () => {
        console.log('window.scrollY', window.scrollY);
        if(window.scrollY > 120) {
            setFadeIn(true);
        } else{
            setFadeIn(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlBanner);
        return () => {
            window.removeEventListener('scroll', controlBanner)
        }
    })

    return (
        <div className={cx('wrapper', 'row')}>
            <div className={cx('content', 'col-6')}>
                <h1 className={cx('title', `${fadeIn && 'fadeIn__topBottom'}`)}>Change & Earn</h1>
                <span className={cx('sub__title', `${fadeIn && 'fadeIn__leftRight'}`)}>You can get started with your marketing automation in a few minutesand you can send email newsletter with your audienceYou can get started with your marketing automation in a few </span>
                <div className={cx('button__wrap', `${fadeIn && 'fadeIn__leftRight'}`)}>
                    <button className={cx('explore__button')}>Explore Now</button>
                    <button className={cx('access__button')}>Get early Access</button>
                </div>
            </div>
            <div className={cx('col-6', 'tranform__img')}>

            <img src={images.banner} alt='banner' width='100%'/>
            </div>
        </div>
    )
}