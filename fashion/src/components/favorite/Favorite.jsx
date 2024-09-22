import Card from "../card/Card";
import "./Favorite.css";
import promo01Img from "../../img/images/promo-01.jpg";
import promo02Img from "../../img/images/promo-02.jpg";

const Favorite = () => {
    return (
        <section className="favorite">
            <div className="container">
                <div className="favorite_header">
                    <h2 className="title-2">Young’s Favourite</h2>
                </div>
                <div className="arrivals__cards">
                    <Card title="Trending on instagram" img={promo01Img} />
                    <Card title="All Under $40" img={promo02Img} />
                </div> 
            </div>
        </section>
    );
}

export default Favorite;