import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brends/Brands";
import Arrivals from "./components/arrivals/Arrivals";

const App = () => {
    return (
        <div className="App">
           <Header/>
           <Promo/>
           <Brands/>
           <Arrivals/>
        </div>
    );
}

export default App;
