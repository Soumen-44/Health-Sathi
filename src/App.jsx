import "./App.css";
import Heros from "./components/Heros";
import Headers from "./components/Headers";
import Features from "./components/Features";
import Product from "./components/Product";
import Footers from "./components/Footers";
function App() {
  return (
    <div>
      <Headers/>
      <Heros/>


      <Features/>
      <Product/>
      <Footers/>
    </div>
  );
}
export default App;
