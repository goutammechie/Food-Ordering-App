import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import { Banner } from './components/Banner';
import { About } from "./components/About"
import ProductsPreview from './components/ProductsPreview';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Banner/>
      <ProductsPreview/>
      <About/> */}
    </div>
  );
}

export default App;