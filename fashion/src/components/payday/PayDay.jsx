import "./PayDay.css";

const PayDay = () => {
    return (
        <section className="payday">
            <div className="container">
                <div className="payday_sale">
                    <h1 className="payday_title">
                        <span className='payday_span'>
                            <span>PAYDAY</span><br/>
                        </span>
                        SAVE NOW
                    </h1>
                    <p className="payday_text">Spend minimal $100 get 30% off voucher code for your next purchase</p>
                    <p className="payday-text"><span>1 June - 10 June 2021</span> *Terms & Conditions apply</p>
                    <button className="payday_btn">SHOP NOW</button>
                </div>
            </div>
        </section>
    );
}

export default PayDay;
