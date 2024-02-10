/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./Card.module.css";
import arrowImg from "../../img/icons/arrow.svg";

const Card = ({title, img}) => {
    return (
        <div className={styles.card}>
            <a className={styles.card__link} href="#!"></a>
            <img className={styles.card__img} src={img} alt="" />
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.card__muted}>Explore Now!</p>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </div>
    );
}

export default Card;
