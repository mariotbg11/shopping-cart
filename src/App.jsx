import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
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

  return (
    <div className="px-10 py-10 font-mono relative">
      <div className="flex flex-col lg:flex-row  gap-6">
        <ProductList handleAddProductToCart={handleAddProductToCart} />
        <Cart cartProduct={cartProduct} setCartProduct={setCartProduct} />
        {warning && (
          <div className="w-80 h-20 text-center p-3 bg-red-600 text-white border absolute left-0 right-0 top-0 bottom-0 m-auto">
            The item is already added to your cart
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
