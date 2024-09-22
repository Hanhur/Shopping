import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brends/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import PayDay from "./components/payday/PayDay";
import Favorite from "./components/favorite/Favorite";

const App = () => {
    return (
        <div className="App">
           <Header/>
           <Promo/>
           <Brands/>
           <Arrivals/>
           <PayDay/>
           <Favorite/>
        </div>
    );
}

export default App;
