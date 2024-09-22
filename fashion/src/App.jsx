import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brends/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import PayDay from "./components/payday/PayDay";

const App = () => {
    return (
        <div className="App">
           <Header/>
           <Promo/>
           <Brands/>
           <Arrivals/>
           <PayDay/>
        </div>
    );
}

export default App;
