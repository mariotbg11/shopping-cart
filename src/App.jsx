import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [cartProduct, setCartProduct] = useState([]);
  const [warning, setWarning] = useState(false);

  function handleAddProductToCart(item) {
    // console.log(item);
    let isAdded = false;
    cartProduct.forEach((product) => {
      if (item.id === product.id) isAdded = true;
    });

    if (isAdded) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCartProduct((cartProduct) => [...cartProduct, item]);
  }

  function handleDeleteProduct(id) {
    setCartProduct((cartProduct) =>
      cartProduct.filter((item) => item.id !== id)
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center px-10 py-10 font-mono relative">
        <div className="flex flex-col lg:flex-row  gap-6">
          <ProductList handleAddProductToCart={handleAddProductToCart} />
          <Cart
            cartProduct={cartProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
          {warning && (
            <div className="w-80 h-20 text-center p-3 bg-red-600 text-white border absolute left-0 right-0 top-0 bottom-0 m-auto">
              The item is already added to your cart
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
