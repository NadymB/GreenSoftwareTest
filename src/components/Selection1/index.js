import classNames from 'classnames/bind';
import styles from './Selection1.module.scss';
import images from '../../asset/images';

const cx = classNames.bind(styles);

export const Selection1 = () => {
    return (
        <div className={cx('wrapper', 'row')}>
            <div className={cx('col-12', 'img__wrapper')}>
                <img src={images.selection1} className={cx('img__bg')} />
            </div>

            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <p className={cx('logo__name')}>BLING CHANGE</p>
                    <img className={cx('logo__vector')} src={images.logoVetor} alt="logo vector" />
                </div>
                <h1 className={cx('title')}>
                    <span className={cx('title__left')}>Just Charge</span>{' '}
                    <span className={cx('title__right')}>and Earn</span>
                </h1>
                <p className={cx('sub__title')}>
                    You can get started with your marketing automation in a few minutesand you can send email newsletter
                    with your audienceYou can get started with your marketing automation in a few{' '}
                </p>
            </div>
        </div>
    );
};
