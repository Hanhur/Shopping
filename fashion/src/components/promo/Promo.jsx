import promoImg from '../../img/images/header-img.jpg';
import './Promo.css';

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <h1 className='promo__title'>
                            <span className='hignlight'>
                                <span>LET’S</span>
                            </span> 
                            EXPLORE 
                            <span className='hignlight hignlight--yellow'>
                                <span>UNIQUE</span>
                            </span>                         
                            CLOTHES.
                        </h1>
                        <p className='promo__desc'>Live for Influential and Innovative fashion!</p>
                        <div className="promo__btn-wrapper">
                            <a className='promo__btn' href="#!">Shop Now</a>
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;
