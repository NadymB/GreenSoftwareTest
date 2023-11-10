import classNames from 'classnames/bind';
import styles from './Selection2.module.scss';
import images from '../../asset/images';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

export const Selection2 = () => {
    const [showSelection, setShowSelection] = useState(false);
    const controlSelection = () => {
        if (window.scrollY > 2600) {
            setShowSelection(true);
        } else {
            setShowSelection(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlSelection);
        return () => {
            window.removeEventListener('scroll', controlSelection);
        };
    });
    return (
        <>
            <h1 data-text="Chose your adapter" className={cx('title', `${showSelection && 'title__animated'}`)}>
                Chose your adapter
            </h1>
            <div className={cx('wrapper', 'row')}>
                <img src={images.selection2} className={cx('col-4', 'img', `${showSelection && 'img1'}`)} />
                <img src={images.selection2} className={cx('col-4', 'img', `${showSelection && 'img2'}`)} />
                <img src={images.selection2} className={cx('col-4', 'img', `${showSelection && 'img3'}`)} />
                <img src={images.selection2} className={cx('col-4', 'img', `${showSelection && 'img4'}`)} />
                <img src={images.selection2} className={cx('col-4', 'img', `${showSelection && 'img5'}`)} />
                <img src={images.selection2} className={cx('col-4', 'img', `${showSelection && 'img6'}`)} />
            </div>
            <div className={cx('btn__wrapper')}>
                <button className={cx('btn')}>Explore</button>
            </div>
        </>
    );
};
