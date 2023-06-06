import Navbar from "./components/Navbar/Navbar";
import CarouselBS from "./components/Carousel/CarouselBS";
import Body from "./components/Body/Body";
import arr from "./data";
import "./App.css"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselBS slide1="River" slide2="Mountain" slide3="Lake" />
      <div className="cards">
        {arr.map((el) => (
          <Body name={el.name} image={el.image} caption={el.caption} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
