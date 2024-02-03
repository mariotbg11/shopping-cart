import shoes from "../shoes";
import Product from "./Product";

export default function ProductList({ handleAddProductToCart }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto overflow-x-hidden h-[700px]">
      {shoes.map((item, index) => (
        <Product
          item={item}
          key={index}
          onAddProductToCart={handleAddProductToCart}
        />
      ))}
    </ul>
  );
}
