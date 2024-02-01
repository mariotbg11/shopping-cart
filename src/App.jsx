import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="px-4 py-10 font-mono">
      <div className="flex flex-col lg:flex-row  gap-6">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
