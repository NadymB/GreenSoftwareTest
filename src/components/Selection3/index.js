import classNames from 'classnames/bind';
import styles from './Selection3.module.scss';
import images from '../../asset/images';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

export const Selection3 = () => {
    const [showSelection, setShowSelection] = useState(false);
    const controlAnimated = () => {
        if (window.scrollY > 3500) {
            setShowSelection(true);
        } else {
            setShowSelection(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', controlAnimated);
        return () => {
            window.removeEventListener('scroll', controlAnimated);
        };
    }, []);
    return (
        <div className={cx('row', 'wrapper')}>
            <div className={cx('col-6', 'img__wrapper')}>
                <img
                    className={cx(`${showSelection ? 'rotate__img' : 'hide'}`)}
                    src={images.xiaomi}
                    alt="xiaomi"
                    width="100%"
                />
            </div>
            <div className={cx('content', 'col-6')}>
                <h1 className={cx('title')}>
                    <span className={cx(`${showSelection && 'title__top'}`)}>Let your charger</span>{' '}
                    <span className={cx(`${showSelection && 'title__bottom'}`)}>make money for you</span>
                </h1>
                <p className={cx(`${showSelection && 'sub__title'}`)}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className={cx(`${showSelection && 'feature__title'}`)}>
                    Leverage on your Blingcharge charger and create a stern of passive income at no cost.
                </p>
                <ul className={cx('feature__list')}>
                    <li className={cx(`${showSelection && 'feature__item'}`)}>
                        <img src={images.power} />
                        <p className={cx('feature__content')}>Buy NFT adapter or take NFT 5W___</p>
                    </li>
                    <li className={cx(`${showSelection && 'feature__item'}`)}>
                        <img src={images.power} />
                        <p className={cx('feature__content')}>Cắm sạc điện thoại ___ app</p>
                    </li>
                    <li className={cx(`${showSelection && 'feature__item'}`)}>
                        <img src={images.coins} />
                        <p className={cx('feature__content')}>Sit back and watch money ____</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
