import "./App.css";
import { Card } from "./Card";
import imageDesk from "./assets/image-product-desktop.jpg";

function App() {
  return (
    <div className="App">
      <Card
        Image={imageDesk}
        Category="Perfume"
        Title="Gabrielle essence eau de parfum"
        Body="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL"
        Price="149.99"
        OriginalPrice="169.99"
        buttonText="Add to Cart"
      />
    </div>
  );
}

export default App;
